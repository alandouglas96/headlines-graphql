const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();
const passport = require('./configAuth');
const cors = require('cors');


require("./db");

app.use(passport.initialize());
app.use(passport.session());

require("./middlewares")(app, passport)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  cors: true,
  debug: true,
  introspection: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    schemaTag: "beta"
  }
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});

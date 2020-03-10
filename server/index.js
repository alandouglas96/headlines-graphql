const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

require("./db");

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

const PORT = process.env.PORT || 4000;
console.log("process.env.ENGINE_API_KEY", process.env.ENGINE_API_KEY);

console.log("port", PORT);
server.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});

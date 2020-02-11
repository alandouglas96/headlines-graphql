const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    spain (newspaper: String, day: Int, month: Int, year: Int ): [Headlines]
    uk (newspaper: String, day: Int, month: Int, year: Int ): [Headlines]
  }

  type Headlines {
    id: ID!
    day : Int
    month : Int
    year : Int
    time: String
    newspaper: String
    headline: String
  }

`;

module.exports = typeDefs;

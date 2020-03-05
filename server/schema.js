const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    headline (newspaper: String, day: Int, month: Int, year: Int ): [Headlines]
  }

  type Headlines {
    id: ID!
    day : Int
    month : Int
    year : Int
    time: String
    newspaper: String
    headline: String
    locale: String
  }

`;

module.exports = typeDefs;

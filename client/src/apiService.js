import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

export default {

  fetchdata: () => {
    return client
      .query({
        query: gql`
      {
        headline {
          newspaper
          headline
          locale
          url
        }
      }`
      })
  }
}
import React, { useState, useEffect } from 'react';
import './App.css';
import HeadLineList from './Components/HeadlineList/HeadLine-list';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";


function App () {

  const [headlines, setHeadline] = useState([]);

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
  });

  useEffect(() => {

    client
      .query({
        query: gql`
        {
          headline {
            newspaper
            headline
          }
        }`
      })
      .then(result => {
        // console.log(result.data.headline[0].newspaper)
        setHeadline(result.data)
      });

  }, []);

  return (
    <div className="App">
      <HeadLineList headlines={headlines} />
      {console.log(headlines)}
    </div>
  );
}

export default App;

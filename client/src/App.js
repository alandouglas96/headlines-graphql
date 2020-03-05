import React, { useState, useEffect } from 'react';
import './App.css';
import HeadLineList from './Components/HeadlineList/HeadLine-list';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";


function App() {

  const [headline, setHeadline] = useState([]);

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
  });
  useEffect(() => {

    client
      .query({
        query: gql`
        {
          headline (newspaper: "laVanguardia"){
            newspaper
            headline
          }
        }
        `
      })
      .then(result => setHeadline(result));

    }, []);
    console.log(headline.data);


  return (
    <div className="App">
      <HeadLineList />
    </div>
  );
}

export default App;

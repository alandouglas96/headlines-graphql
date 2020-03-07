import React, { useState, useEffect } from 'react';
import './App.css';
import HeadLineList from './Components/HeadlineList/HeadLine-list';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import SearchBar from './Components/SearchBar/SearchBar';

function bySearchQuery(query) {
  const regex = new RegExp(query)
  return headline => regex.test(headline.headline)
}

function App () {

  const [headlines, setHeadline] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const headlinesToShow = searchQuery 
    ? headlines.filter(bySearchQuery(searchQuery)) 
    : headlines

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
            locale
          }
        }`
      })
      .then(result => {
        setHeadline(result.data.headline)
      });

  }, []);

  
  return (
    <div className="App">
      <SearchBar onSearchQueryUpdate={setSearchQuery}></SearchBar>
      {headlinesToShow && <HeadLineList headlines={headlinesToShow} />}
    </div>
  );
}

export default App;

import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLine-item/HeadLine-item';

function HeadLineList ({ headlines }) {

  return (
    <div className="HeadLineList">
      <div className="header">Headlines around the world</div>
      <div className="filter">
        <h3>Filter</h3>
        <div>select country</div>
        <div>select newspaper</div>
      </div>
      <div className="wrapper">
        {headlines.map(headline => {
          return <HeadLineItem headline={headline} />
        })}
      </div>
    </div>
  );
}

export default HeadLineList;

import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLine-item/HeadLine-item';
import breakingNews from '../../breaking.png'

function HeadLineList ({ headlines }) {

  return (
    <div className="HeadLineList">
      <img src={breakingNews}className="breakingNews"></img>
        <h1 className="country">Spain</h1>
      <div className="wrapper">
        {headlines.map(headline => {
          if (headline.locale === 'Spain')
            return <HeadLineItem headline={headline} />
        })}
      </div>
      <h1 className="country">UK</h1>
      <div className="wrapper">
        {headlines.map(headline => {
          if (headline.locale === 'UK')
            return <HeadLineItem headline={headline} />
        })}
      </div>
    </div>
  );
}

export default HeadLineList;

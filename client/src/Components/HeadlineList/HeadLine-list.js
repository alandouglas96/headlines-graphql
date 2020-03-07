import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLine-item/HeadLine-item';
import breakingNews from '../../breaking.png'

function HeadLineList ({ headlines }) {

  return (
    <div className="HeadLineList">
      <img src={breakingNews} className="breakingNews"></img>
      <div className='flag' id="flagSpain"></div>
      <div className="wrapper">
        {headlines.map(headline => {
          if (headline.locale === 'Spain')
            return <HeadLineItem headline={headline} />
        })}
      </div>
      <div className='flag' id="flagUK"></div>
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

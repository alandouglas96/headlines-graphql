import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLine-item/HeadLine-item';

function HeadLineList ({headlines}) {
  
  return (
    <div className="HeadLineList">
      <div className="header">Headlines around the world</div>
      {headlines.map(headline => {
        return <HeadLineItem headline={headline}/>
   })}
    </div>
  );
}

export default HeadLineList;

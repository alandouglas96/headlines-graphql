import React from 'react';
import './style.css';
import HeadLineItem from '../HeadLine-item/HeadLine-item';

function HeadLineList (props) {
  return (
    <div className="HeadLineList">
      {props.headlines.map(headline => {
        return <HeadLineItem headline={headline}/>
   })}
    </div>
  );
}

export default HeadLineList;

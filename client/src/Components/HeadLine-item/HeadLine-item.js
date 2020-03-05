import React from 'react';
import './style.css';

function HeadLineItem ({headline}) {

  return (
    <div className="HeadLineItem">
      <p>{headline.headline}</p>
    </div>
  );
}

export default HeadLineItem;

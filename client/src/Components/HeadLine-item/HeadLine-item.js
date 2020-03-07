import React from 'react';
import './style.css';

function HeadLineItem ({ headline }) {

  return (
    <div className="HeadLineItem" onClick={() => {
      console.log('clicked')
      window.open(headline.url);
    }
    }>
      <div className="headline">{headline.headline}</div>
      <h4 className='newspaper'>{headline.newspaper}</h4>
    </div>
  );
}

export default HeadLineItem;

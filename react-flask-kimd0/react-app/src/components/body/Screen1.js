import React from 'react';
import './Screen1.css';

const Screen1 = (props) => {

  return (
    <>
      <div className="wrap">
        <div className="sec12"></div>
        <div className='dat'>{props.data}</div>
      </div>
    </>
  );
};
export default Screen1;


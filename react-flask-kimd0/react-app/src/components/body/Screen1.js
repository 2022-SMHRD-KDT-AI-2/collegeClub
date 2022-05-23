import React from 'react';
import './Screen1.css';

const Screen1 = (props) => {
  

  return (
    <>
      <div className="wrap">
        <img className='sec12' alt='이미지1' src={props.img}></img>
        <div className='dat'>{props.data[0]}</div>
        <div className='dat'>{props.data[1]}</div>
      </div>
    </>
  );
};
export default Screen1;


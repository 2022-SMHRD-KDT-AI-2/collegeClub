import React from 'react';
import './Screen1.css';
import Header from '../header/Header';

const Screen1 = (props) => {
  return (
    <>
      <div className="wrap">
        <Header></Header>
        <img className='sec12' alt='이미지1' src={props.img}></img>
        <div className='datGroup2'>
          <div className='dat'>{props.data[0]}</div>
          <div className='dat'>{props.data[1]}</div>
        </div>
        
      </div>
    </>
  );
};
export default Screen1;


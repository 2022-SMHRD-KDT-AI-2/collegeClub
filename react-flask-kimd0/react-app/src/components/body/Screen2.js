import React from 'react';
import './Screen2.css';
import Header from '../header/Header';

const Screen2 = (props) => {
    return (
        <>
            <div className="wrap">
            <Header></Header>
            <div className='datGroup'>
                    <div className='dat'>{props.data[0]}</div>
                    <div className='dat'>{props.data[1]}</div>
                </div>
                <img className='sec13' alt='이미지1' src={props.img}></img>
            </div >
        </>
    );
};
export default Screen2;
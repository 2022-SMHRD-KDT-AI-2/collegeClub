import React from 'react';
import './Screen1.css';
import bar01 from '../img/meneBar_01.png';
import bar02 from '../img/menuBar_02.png';
import bar03 from '../img/menuBar_03.png';
import bar04 from '../img/menuBar_04.png';
import bar05 from '../img/menuBar_05.png';
import { Link } from 'react-router-dom';

const Text = (props) => {
  console.log(props.text);
  if (props.text.length == 1) {
    return (
      <div className='text1'>
        {props.text[0]};
      </div>
    )
  } else {
    return (
      <>
        <div className='text2'>
          {props.text[0]}
        </div>
        <div className='text3'> 
          {props.text[1]}
        </div>
      </>
    )
  }
}

const Screen1 = (props) => {
  return (
    <>
      <div className="wrap">
        <div className="header">
          <div className='incam'></div>
        </div>
        <div className="sec12"></div>
        <div className='que'><Text text={props.text}></Text></div>
        <div id="menuBar">
          <div>
            <img className='menub' src={bar01} id="menuBarIcon1" />
          </div>
          <div>
            <img className='menub' src={bar02} id="menuBarIcon2" />
          </div>
          <div>
            <img className='menub' src={bar03} id="menuBarIcon3" />
          </div>
          <div>
            <img className='menub' src={bar04} id="menuBarIcon4" />
          </div>
          <div>
            <img className='menub' src={bar05} id="menuBarIcon5" />
          </div>
        </div>

      </div >

    </>
  );
};
export default Screen1;


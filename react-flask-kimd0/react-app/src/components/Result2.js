import React from 'react';
import './Result2.css';
import bar01 from '../img/meneBar_01.png';
import bar02 from '../img/menuBar_02.png';
import bar03 from '../img/menuBar_03.png';
import bar04 from '../img/menuBar_04.png';
import bar05 from '../img/menuBar_05.png';
import { Link } from 'react-router-dom';



const Screen1 = (props) => {

  return (
    <>
      <div className="wrap">
        <div className="header">
          <div className='incam'></div>
        </div>

        <div className="club1"></div>
        <div className="club2"></div>
        <div className="club3"></div>
        <div className="club4"></div>

        <div className="userBox1">
            <div className="userProfile"></div>
            <div className="userName"></div>
            <div className="userProfile"></div>
            <div className="userName"></div>
        </div>
        <div className="userBox2">
            <div className="userProfile"></div>
            <div className="userName"></div>
            <div className="userProfile"></div>
            <div className="userName"></div>
        </div>

        <div className='Buttonsection2'>
            <div className='shareButton'><button className='Butt1' type='button'>결과 공유하기</button></div>
            <div className='restartButton'><button className='Butt2' type='button'>다시하기</button></div>
        </div>

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

      </div>

    </>
  );
};
export default Screen1;


import React from 'react';
import './Result2.css';



const Screen1 = (props) => {

  return (
    <>
      <div className="wrap">
        <div className="header">
          <div className='incam'></div>
        </div>

        <div className="club1"></div>
        <div className="club2"></div>
        <div className="userBox1">
            <div className="userProfile"></div>
            <div className="userName"></div>
        </div>
        <div className="userBox1">
            <div className="userProfile"></div>
            <div className="userName"></div>
        </div>
        <div className="club3"></div>
        <div className="club4"></div>
        <div className="userBox1">
            <div className="userProfile"></div>
            <div className="userName"></div>
        </div>
        <div className="userBox1">
            <div className="userProfile"></div>
            <div className="userName"></div>
        </div>

        <div className='Buttonsection2'>
            <div className='shareButton'><button className='Butt1' type='button'>결과 공유하기</button></div>
            <div className='restartButton'><button className='Butt2' type='button'>다시하기</button></div>
        </div>
      </div>

    </>
  );
};
export default Screen1;


import React from 'react';
import './Result2.css';
import Header from './header/Header';
import Menubar from './menubar/Menubar'


const Screen1 = (props) => {

  return (
    <>
      <div className="wrap">
        <Header></Header>

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
      </div>
      <Menubar></Menubar>

    </>
  );
};
export default Screen1;


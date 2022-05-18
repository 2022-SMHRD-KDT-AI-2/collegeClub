import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import axios from 'axios';
import logo from '../img/logo.png';
import bar01 from '../img/meneBar_01.png';
import bar02 from '../img/menuBar_02.png';
import bar03 from '../img/menuBar_03.png';
import bar04 from '../img/menuBar_04.png';
import bar05 from '../img/menuBar_05.png';




const Main = (props) => {



  return (
    <>
      <div></div>
      <div id="main">
        <img className='logo' src={logo} width="200px" />

        <div className="sce">
          <div className="sce1">

            <div className="sce11">
              <button id='sc1' type='button'> <Link to="/Screen1" className='link'>  <p className='start'>시나리오 1</p></Link></button>

            </div>
          </div>
          <div className="sce2">
            <div className="sce22">
              <button id='sc2' type='button'>  <Link to="/Screen1" className='link'><p className='start'>시나리오 2</p></Link></button>
            </div>
          </div>
          <div className="sce3">
            <div className="sce33">
              <button id='sc3' type='button'> <Link to="/Screen1" className='link'> <p className='start'>시나리오 3</p></Link></button>
            </div>
          </div>
        </div>
        <div id="menuBar">

        </div>
      </div>




    </>
  );
};

export default Main;


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



//시나리오 선택 화면
function link() {
  setTimeout(function () {
    <Link to="/Screen1">213</Link>
  }, 5);
}

const Main = (props) => {



  return (
    <>
      <div></div>
      <div id="main">
        <img src={logo} width="200px" />

        <div className="sce">
          <div className="sce1">

            <div className="sce11">
              <button id='sc1' type='button' onClick={link}>시나리오 1</button>
            </div>
          </div>
          <div className="sce2">
            <div className="sce22">
              <button id='sc2' type='button'>시나리오 2</button>
            </div>
          </div>
          <div className="sce3">
            <div className="sce33">
              <button id='sc3' type='button'>시나리오 3</button>
            </div>
          </div>
        </div>
        <div id="menuBar">
          <div>
            <img src={bar01} id="menuBarIcon1" />
          </div>
          <div>
            <img src={bar02} id="menuBarIcon2" />
          </div>
          <div>
            <img src={bar03} id="menuBarIcon3" />
          </div>
          <div>
            <img src={bar04} id="menuBarIcon4" />
          </div>
          <div>
            <img src={bar05} id="menuBarIcon5" />
          </div>
        </div>
      </div>




    </>
  );
};
export default Main;


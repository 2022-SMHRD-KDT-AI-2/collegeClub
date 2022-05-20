import React from 'react';
import './Screen3.css';
import bar01 from '../img/meneBar_01.png';
import bar02 from '../img/menuBar_02.png';
import bar03 from '../img/menuBar_03.png';
import bar04 from '../img/menuBar_04.png';
import bar05 from '../img/menuBar_05.png';
import { Link } from 'react-router-dom';
//import '../game/control.js'


const Screen1 = (props) => {
    return (
        <>
            <div className="wrap">
                <div className="header">
                    <div className='incam'></div>
                </div>
                <div>
                    <div class="main">
                    <canvas id="canvas" width="300" height="300"></canvas>
                    <p class="timer1"></p>
                    <button class="send">버튼</button>
                    </div>
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

            </div >

        </>
    );
};
export default Screen1;


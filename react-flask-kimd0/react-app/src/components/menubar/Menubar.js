import React from 'react';

import './Menubar.css';

import bar01 from './img/meneBar_01.png';
import bar02 from './img/menuBar_02.png';
import bar03 from './img/menuBar_03.png';
import bar04 from './img/menuBar_04.png';
import bar05 from './img/menuBar_05.png';


const Screen1 = (props) => {
    return (
        <>
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
        </>
    );
};
export default Screen1;


import React from 'react';
import './Screen5.css';
import bar01 from '../img/meneBar_01.png';
import bar02 from '../img/menuBar_02.png';
import bar03 from '../img/menuBar_03.png';
import bar04 from '../img/menuBar_04.png';
import bar05 from '../img/menuBar_05.png';
import { Link } from 'react-router-dom';


const Screen5 = (props) => {
    return (
        <>
            <div className="wrap">
                <div className="header">
                    <div className='incam'></div>
                </div>
                <div className="sec15"></div>
                <div className="sec2">아 지은이였구나</div>
                <div className="footer">
                    <div className="levelsec">
                        <div className="pre"> <Link to="/Screen4" className='link'><div className="preText">이전</div></Link></div>
                        <div className="level">
                            <p className="que">Q1</p>
                            <p className="que">● ○ ○ ○ ○ ○ ○ ○</p>
                        </div>
                        <div className="next"><Link to="/Quiz2" className='link'><div className="nextText">다음</div></Link></div>
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
export default Screen5;


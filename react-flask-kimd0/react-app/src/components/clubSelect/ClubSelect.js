import React from 'react';
import { Link } from 'react-router-dom';
import './ClubSelect.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../header/Header'
import Menubar from '../menubar/Menubar'
import a1 from "../../img/map.jpg"
import a2 from "../../img/blossom.jpg"
import clubhome from "../../img/clubhome.jpg"
import clubjoin from "../../img/clubjoin.JPG"

function ClubSelect() {
    let [img,changimg] = useState(a1);
    return(
        <div className='page'>
            <div className="head">
                <p className='clubname'>2</p>
            </div>
            <table className='club_top_menu'>
                <tbody>
                    <tr className='tab'>
                        <td className='tabd'>동아리 홈</td>
                        <td className='tabd'>게시판</td>
                    </tr>
                </tbody>
            </table>
            <div className='mainpage'>
            
            <div className='imgdi'>
            <img className='backImg' src={img}/>
            </div>
            <div className="profImg1">
            <img className='profImg' src={a2}/>
            </div>
            <div className='clubName'>1233</div>
            </div>
            <div className='clubbtn'>
            <button className='button1'><img className='btnimg' src={clubhome}></img><br></br>동아리방</button>
            <button className='button2'><img className='btnjoin' src={clubjoin}></img><br></br>동아리가입</button>
            </div>
            <div className='clubexp'>
                    1321312
            </div>
        </div>
    )

}


export default ClubSelect;


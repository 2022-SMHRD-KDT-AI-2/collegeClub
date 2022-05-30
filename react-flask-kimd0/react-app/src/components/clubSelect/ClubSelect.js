import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import './ClubSelect.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../header/Header'
import Menubar from '../menubar/Menubar'
import a2 from "../../img/blossom.jpg"
import clubhome from "../../img/clubhome.jpg"
import clubjoin from "../../img/clubjoin.JPG"

function ClubSelect() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const { id } = useParams();

  useEffect((data) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://220.80.33.51:8082/clubDetail?num=` + id
        );
        setLoading(false);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log(data)
  return (
    <div className='page'>
      <div className="head">
        <div className="club">
          <Link to='/club/0'><button type='button' className='clubBack'></button></Link>
          <div className='clubname'>{data.cc_name}</div></div>
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
          <img className='backImg' src="/img/back.jpg" />
        </div>
        <div className="profImg1">
          <img className='profImg' src={data.cc_img+".jpg"} />
        </div>
        <div className='clubName'>{data.cc_name}</div>
      </div>
      <div className='clubexp'>
        {data.cc_exp}
      </div>
      <div className='clubbtn'>
        <button className='button1'><img className='btnimg' src={clubhome}></img><br></br>동아리방</button>
        <button className='button2'><img className='btnjoin' src={clubjoin}></img><br></br>동아리가입</button>
      </div>
      
    </div>
  )

}


export default ClubSelect;


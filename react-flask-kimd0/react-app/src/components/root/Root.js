import React from 'react';
import { Link } from 'react-router-dom';
import './Root.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import Header from '../header/Header'
import Menubar from '../menubar/Menubar'



function Root() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect((data) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://220.80.33.51:8082/club`
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  console.log(data)
  const rendering = () => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(<div className='Buttondiv' id={"Buttondiv" + i}><button className='Buttonset' id={"Buttonset" + i} key={i}>{data[i].club_name + "  "}</button></div>);
    }
    result.push(<div className='Buttondiv' id="Buttondiv7"><button className='Buttonset' id="Buttonset7">ㅎㅇㅇ</button></div>)
    return result;
  };



  return (
    <>
      <Header></Header>
      <div className='Clublistgo'>★동아리 리스트 바로가기</div>


      <div className='render'>{rendering()}</div>

      <div className='Checkdiv'>
        <div className='Checkinner'>
          <Link to="/main"><button className='Check1' id='Checkid1' type='button'>성향검사하기</button><button className='Check1' id='Checkid2' type='button'>></button></Link>
        </div>
        <div className='Checkinner2'>
          <Link to="/result"><button className='Check2' id='Checkid3' type='button'>자신의 성향 보기</button><button className='Check2' id='Checkid4'>></button></Link>
        </div>
      </div>
      <Menubar></Menubar>
    </>
  )
}





export default Root;


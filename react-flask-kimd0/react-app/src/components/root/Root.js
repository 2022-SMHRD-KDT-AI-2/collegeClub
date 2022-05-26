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
      result.push(<button key={i}>{data[i].club_name + "  "}</button>);
    }
    return result;
  };


  return (
    <>
      <Header></Header>
      <div>
        동아리 리스트 바로가기
        <div>{rendering()}</div>
      </div>
      <div>
        <Link to="/main"><button type='button'>성향검사하기</button></Link>
      </div>
      <div>
        <Link to="/result"><button type='button'>자신의 성향 보기</button></Link>
      </div>
      <Menubar></Menubar>
    </>
  )
}





export default Root;


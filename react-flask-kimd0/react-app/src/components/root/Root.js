import React from 'react';
import { Link } from 'react-router-dom';
import './Root.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
      let str = "/club/"+i
      result.push(<div className='Buttondiv' id={"Buttondiv" + i}><Link key={i} to={str}><button className='Buttonset' id={"Buttonset" + i} key={i}>{data[i].club_name + "  "}</button></Link></div>);


    }
    return result;
  };


  return (
    <>
      <Header></Header>
      <div className='clublist'>

        <div className='render'>{rendering()}</div>
      </div>
      <div className='Checkdiv'>
        <div className='Checkinner'>
          <Link to="/main"><button className='Check' type='button'>성향검사하기</button></Link>
        </div>
        <div className='Checkinner2'>
          <Link to="/result"><button className='Check' type='button'>자신의 성향 보기</button></Link>
        </div>
      </div>
      <Menubar></Menubar>
    </>
  )
}





export default Root;


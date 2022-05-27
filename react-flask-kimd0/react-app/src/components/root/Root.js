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
    result.push(<div className='Buttonwrap'><div className='Buttonimg' id='Buttonimg7'></div><div className='Buttondiv' id="Buttondiv7"><button className='Buttonset' id="Buttonset7">전체</button></div></div>)
    for (let i = 0; i < data.length; i++) {
      let str = "/club/" + (i + 1)
      result.push(<div className='Buttonwrap'><Link key={i} to={str}><button className='Buttonimg' id={"Buttonimg" + i}></button></Link><div className='Buttondiv' id={"Buttondiv" + i}><Link key={i} to={str}><button className='Buttonset' id={"Buttonset" + i} key={i}>{data[i].club_name + "  "}</button></Link></div></div>);
    }
    return result;
  };



  return (
    <>
      <Header></Header>
      <div className='Clublistgo'>⭐️ 동아리 리스트 바로가기</div>


      <div className='render'>{rendering()}</div>

      <div className='Checkdiv'>
        <div className='Checkinner'>
          <Link to="/main">
            <button className='Check1' id='Checkid1' type='button'>
              <div> 내 동아리 성향 </div><div> 분석해보기 </div>
            </button>
            <button className='Check1' id='Checkid2' type='button'>
              <div className='nextBtnImg'></div>
            </button></Link>
        </div>
        <div className='Checkinner2'>
          <Link to="/result">
            <button className='Check2' id='Checkid3' type='button'>
              <div> 내 테스트 결과 </div><div> 보러가기 </div>
            </button>
            <button className='Check2' id='Checkid4'>
              <div className='nextBtnImg'></div>
            </button></Link>
        </div>
      </div>
      <Menubar></Menubar>
    </>
  )
}





export default Root;

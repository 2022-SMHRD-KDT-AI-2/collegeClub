import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './Result2.css';
import Header from './header/Header';
import Menubar from './menubar/Menubar'



const useResult2 = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);


  useEffect((data) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://220.80.33.51:8083/result2`
        );
        setLoading(false);
        setData(response.data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  console.log(data)

  return (
    <>
        <Header></Header>
      <div className="wrap">

        <div className='clubWrap1'>
          <div className='clubTitle'>⭐️ 건우 픽!</div>
          <div className='clubWrap2'>
            <button className='clubLogo' id='logoImg1'></button>
            <div className='clubIrum'>강건우 강건우</div>
          </div>
          <div className='clubContents'>
            <div className='clubText'>
              강 건우 중간 건우 약 건우 강 건우 중간 건우 약 건우 강 건우 중간 건우 약 건우 강 건우 중간 건우 약 건우 
              강 건우 중간 건우 약 건우 강 건우 중간 건우 약 건우 강 건우 중간 건우 약 건우 강 건우 중간 건우 약 건우
            </div>
          </div>
        </div>

        <div className='result2Line'></div>

        <div className='clubWrap1'>
          <div className='clubTitle'>⭐️ 도영 픽!</div>
          <div className='clubWrap2'>
            <button className='clubLogo' id='logoImg2'></button>
            <div className='clubIrum'>김도 김도 김도 김도 영</div>
          </div>
          <div className='clubContents'>
            <div className='clubText'>
            김도0 김도1 김도2 김도3 김도4 김도5 김 도영 님 도영 딤 도영 림 도영 밈 도영 빔 도영 
            정처기 합격 스터디 합격 마카롱 가능
            </div>
          </div>
        </div>

        <div className='result2Line'></div>

        <div className='clubWrap1'>
          <div className='clubTitle'>⭐️ 주호 픽!</div>
          <div className='clubWrap2'>
            <button className='clubLogo' id='logoImg3'></button>
            <div className='clubIrum'>안 주호 예스 주호</div>
          </div>
          <div className='clubContents'>
            <div className='clubText'>
              안주 호 안주 불호 안 주호 밖 주호 ,, 딥치즈 베이컨 포테이토 햄치즈 스페셜 
            </div>
          </div>
        </div>

        <Link to='/'>
          <button className='resultRestart' type='button'>처음으로</button>
        </Link>
        
      </div>
      <Menubar></Menubar>
    </>
  );
};
export default useResult2;


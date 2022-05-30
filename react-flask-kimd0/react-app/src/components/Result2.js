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
        setData(response.data);
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
        <Link to={"/clubSelect/" + data.cc_num1}>
          <div className='clubWrap1'>
            <div className='clubTitle'>⭐️ 건우 픽!</div>
            <div className='clubWrap2'>
              <button className='clubLogo' id='logoImg1'></button>
              <div className='clubIrum'>{data.cc_name1}</div>
            </div>
            <div className='clubContents'>
              <div className='clubText'>
                {data.cc_exp1}
              </div>
            </div>
          </div>
        </Link>

        <div className='result2Line'></div>
        <Link to={"/clubSelect/" + data.cc_num2}>
          <div className='clubWrap1'>
            <div className='clubTitle'>⭐️ 도영 픽!</div>
            <div className='clubWrap2'>
              <button className='clubLogo' id='logoImg2'></button>
              <div className='clubIrum'>{data.cc_name2}</div>
            </div>
            <div className='clubContents'>
              <div className='clubText'>
                {data.cc_exp2}
              </div>
            </div>
          </div>
        </Link>

        <div className='result2Line'></div>

        <Link to={"/clubSelect/" + data.cc_num2}>
          <div className='clubWrap1'>
            <div className='clubTitle'>⭐️ 주호 픽!</div>
            <div className='clubWrap2'>
              <button className='clubLogo' id='logoImg3'></button>
              <div className='clubIrum'>{data.cc_name3}</div>
            </div>
            <div className='clubContents'>
              <div className='clubText'>
                {data.cc_exp3}
              </div>
            </div>
          </div>
        </Link>

        <Link to='/'>
          <button className='resultRestart' type='button'>처음으로</button>
        </Link>

      </div>
      <Menubar></Menubar>
    </>
  );
};
export default useResult2;


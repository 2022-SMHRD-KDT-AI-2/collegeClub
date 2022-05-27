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
      <div className="wrap">
        <Header></Header>

        <div className='clubWrap1'>
          <div className='clubTitle'></div>
          <div className='clubWrap2'>
            <div className='clubLogo'></div>
            <div className='clubIrum'></div>
            <div className='clubContents'></div>
          </div>
        </div>
        <div className='clubWrap1'>
          <div className='clubTitle'></div>
          <div className='clubWrap2'>
            <div className='clubLogo'></div>
            <div className='clubIrum'></div>
            <div className='clubContents'></div>
          </div>
        </div>
        <div className='clubWrap1'>
          <div className='clubTitle'></div>
          <div className='clubWrap2'>
            <div className='clubLogo'></div>
            <div className='clubIrum'></div>
            <div className='clubContents'></div>
          </div>
        </div>
        
      </div>
      <Menubar></Menubar>
    </>
  );
};
export default useResult2;


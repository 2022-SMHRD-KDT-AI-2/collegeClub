import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../header/Header'
import Menubar from '../menubar/Menubar'

function useMain() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect((data) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://220.80.33.51:8082/sce`
        );
        setLoading(false);
        setData(response.data);
        console.log(data)

      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        'loading...'
      ) : (
        <>
          <div className='blossom'></div>
          <Header></Header>
          <div id="main">
            <div className="sce">
              <div className="sce1">
                <div className="sce11">
                  <button id='sc1' type='button'> <Link to="/Sce1" className='link'>  <span className='start'>{data[0].sce_name}</span></Link></button>

                </div>
              </div>
              <div className="sce2">
                <div className="sce22">
                  <button id='sc2' type='button'>  <Link to="/Screen1" className='link'><span className='start'>{data[1].sce_name}</span></Link></button>
                </div>
              </div>
              <div className="sce3">
                <div className="sce33">
                  <button id='sc3' type='button'> <Link to="/Screen1" className='link'> <span className='start'>{data[2].sce_name}</span></Link></button>
                </div>
              </div>
            </div>
          </div>
          <Menubar></Menubar>
        </>
      )
      }

    </div>
  );
}


export default useMain;


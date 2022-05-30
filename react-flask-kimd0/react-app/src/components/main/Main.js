import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import axios from 'axios';
import { useState, useEffect, Component } from 'react';
import Header from '../header/Header'
import Menubar from '../menubar/Menubar'
import Slider from "react-slick";
import SimpleSlider from '../img';
import FSlider from '../img';




const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "20px"
};

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
          <Header ></Header>
          <div id="main">
            <div className="sce">
              <div className="sce1">
                <FSlider {...settings}>
                  <button id='sc1' type='button'>      <Link to="/Sce1" className='link'>  <span className='start'>{data[0].sce_name}</span></Link></button>

                </FSlider>
              </div>
              <div className="sce2">
                <FSlider {...settings}>
                  <button id='sc2' type='button'>  <Link to="/Screen1" className='link'><span className='start'>{data[1].sce_name}</span></Link></button>
                </FSlider>
              </div>
              <div className="sce3">
                <FSlider {...settings}>
                  <button id='sc3' type='button'> <Link to="/Screen1" className='link'> <span className='start'>{data[2].sce_name}</span></Link></button>
                </FSlider>
              </div>
            </div>
          </div>


          <Menubar></Menubar>



        </>
      )
      }

    </div >
  );
}


export default useMain;


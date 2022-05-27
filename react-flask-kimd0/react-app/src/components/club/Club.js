import React from 'react';
import { useParams } from "react-router";
import qs from "qs";
import { Link } from 'react-router-dom';
import './Club.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../header/Header'
import Menubar from '../menubar/Menubar'



function useClub() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  const { id } = useParams();
  console.log(id)

  useEffect((data) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://220.80.33.51:8082/clubSelect?num=`+id
        );
        setLoading(false);
        setData(response.data);

      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const rendering = () => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      let str = "/club/"+i
      result.push(<div>{data[i].cc_name}</div>);
    }
    return result;
  };
  
  return (
    <>
      
      <div>{rendering()}</div>
      <div className="Clubscreen">
        <div className="wrap">
          <div className="club"><span className='clubsearch'>동아리검색</span></div>
          <form action='' method=''>
            <select>
              <option>전국</option>
              <option value="1">강원</option>
              <option value="2">경기</option>
              <option value="3">경남</option>
              <option value="3">경북</option>
              <option value="4">광주</option>
              <option value="5">대구</option>
              <option value="6">대전</option>
              <option value="7">부산</option>
              <option value="8">서울</option>
              <option value="9">세종</option>
              <option value="10">울산</option>
              <option value="11">인천</option>
              <option value="12">전남</option>
              <option value="13">전북</option>
              <option value="14">제주</option>
              <option value="15">충남</option>
              <option value="16">충북</option>
            </select>
          </form>
        </div>
      </div>
    </>
  )
}


export default useClub;


import React from 'react';
import { useParams } from "react-router";
import qs from "qs";
import { Link } from 'react-router-dom';
import './Club.css';
import axios from 'axios';
import { useState, useEffect } from 'react';



import Header from '../header/Header'
import Menubar from '../menubar/Menubar'
import { Scroll } from 'react-scroll/modules/mixins/Helpers';




function useClub() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const [club, setClub] = useState();
  const [club_num, setClub_num] = useState("");

  const { id } = useParams();
  console.log(id)

  useEffect((data) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://220.80.33.51:8082/clubSelect?num=` + id
        );
        setLoading(false);
        setData(response.data);



      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);



  function str(props) {
    // eslint-disable-next-line default-case
    switch (props.club_num) {
      case 1:
        return <div key={data.cc_num}>문화/취미</div>
      case 2:
        return <div key={data.cc_num}>공연/예술/음악</div>
      case 3:
        return <div key={data.cc_num}>종교</div>
      case 4:
        return <div key={data.cc_num}>학술</div>
      case 5:
        return <div key={data.cc_num}>봉사</div>
      case 6:
        return <div key={data.cc_num}>체육/레저</div>
      case 7:
        return <div key={data.cc_num}>창업</div>
    }
  }

  function Menub() {
    switch (scroll) {
      case true:
        return
      case false:
        return <Menubar></Menubar>
    }
  }



  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log(scroll)

    if (window.scrollY >= 600) {
      setScroll(true);
    } else {

      setScroll(false);
    }

  };


  const rendering = () => {

    const result = [];
    console.log(scroll)
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      let num = "/clubSelect/" + (data[i].cc_num)
      result.push(<div className='ClubN'><Link to={num}>
        <div className='Clubimg'><img className='Inimg' src={data[i].cc_img + ".jpg"} alt='img1'></img></div>
        <div className='Clubna'>{data[i].cc_name}</div>
        <div className='Clubca'>{str(data[i])}</div></Link>
      </div>);
    }

    return result;
  };

  return (
    <>


      <div className="Clubscreen">
        <div className="wrap">
          <div className="club"><span className='clubsearch'>동아리검색</span></div>
          <div className='area'>
            <form className='form' action='' method=''>
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
            <div className='Inputt'>
              <div className='inputdiv'>
                <input placeholder='동아리명을 입력해주세요' className='input' type={'text'}></input>
                <div className='search'>
                  <button className='searchB'></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Clubcount'>총{data.length}개의 동아리가 있습니다</div>
      <div className='Clubname'>{rendering()}</div>

      <div>{Menub()}</div>


    </>
  )


}




export default useClub;


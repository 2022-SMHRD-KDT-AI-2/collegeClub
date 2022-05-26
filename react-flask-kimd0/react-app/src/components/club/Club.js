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
          `http://220.80.33.51:8082/clubSelect?num = `+id
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
      <div>
      </div>
    </>
  )
}


export default useClub;


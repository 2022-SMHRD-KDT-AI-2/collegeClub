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
  const { id } = useParams();
  console.log(id)

  

  return (
    <>
      <div>
      </div>
    </>
  )
}


export default useClub;


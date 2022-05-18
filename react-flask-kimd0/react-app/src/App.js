import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './components/Main';
import Screen1 from './components/Screen1';
import Result from './components/result'
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Main />}></Route> 
          <Route path="/screen1*" element={<Screen1 />}></Route> 
          <Route path="/result*" element={<Result />}></Route> 
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */} 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
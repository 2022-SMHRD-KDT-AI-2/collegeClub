import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './components/Main';
<<<<<<< Updated upstream
import Screen1 from './components/Screen1';
import Result from './components/result'
=======
import Quiz2 from './components/Quiz2';
>>>>>>> Stashed changes
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Main />}></Route> 
<<<<<<< Updated upstream
          <Route path="/screen1/" element={<Screen1 />}></Route> 
          <Route path="/result/" element={<Result />}></Route> 
=======
          <Route path="/quiz2*" element={<Quiz2 />}></Route> 
>>>>>>> Stashed changes
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */} 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './components/main/Main';
import Sce1 from './components/sce1/sce1';
import Result from './components/result'
import Result2 from './components/Result2'


import Header from './components/header/Header'
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="header" element={<Header />}></Route>

          <Route path="/sce1" element={<Sce1 />}></Route>
          <Route path="/result/" element={<Result />}></Route>
          <Route path="/result2/" element={<Result2 />}></Route>


          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
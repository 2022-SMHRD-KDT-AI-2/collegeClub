
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Root from './components/root/Root'
import Main from './components/main/Main';
import Sce1 from './components/sce1/sce1';
import Result from './components/result'
import Result2 from './components/Result2'
import Club from './components/club/Club'
import ClubSelect from './components/clubSelect/ClubSelect'

import Screen3 from './components/body/Screen3'

import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Root />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/club" element={<Club />}>
           <Route path=":id" element={<Club />} />
          </Route>
          <Route path="/clubSelect" element={<ClubSelect />}>
            <Route path=":id" element={<ClubSelect />} />
          </Route>

          <Route path="/screen3" element={<Screen3 />}></Route>

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
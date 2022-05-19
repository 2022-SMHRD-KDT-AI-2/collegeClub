
import React from 'react';
// import { Link } from 'react-router-dom';
import './Quiz1.css';

//퀴즈 2버튼 화면

const Quiz1 = (props) => {
  return (
    <>
      <div className="wrap">
        <div className="header">
          <div className="campus"><div className='incam'></div></div>
        </div>
        <div className="sec1"></div>
        <div className="sec2">
          <div className="quizButton">
            <button className="quiz1Left">A</button>
            <button className="quiz1Right">B</button>
          </div>
        </div>
        <div className="footer">
          <div className="levelsec">
            <div className="pre"><div className="preText">이전</div></div>
            <div className="level">
            </div>
          </div>


          <div className="footerImg"></div>
        </div>
      </div >
    </>
  );
};
export default Quiz1;


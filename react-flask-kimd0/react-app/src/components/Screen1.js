import React from 'react';
import './Screen1.css';


const Screen1 = (props) => {
  return (
    <>
      <div className="wrap">
        <div className="header">
          <div className="campus"><div className='incam'></div></div>
        </div>
        <div className="sec12"></div>
        <div className="sec2">대사넣는곳</div>
        <div className="footer">
          <div className="levelsec">
            <div className="pre"><div className="preText">이전</div></div>
            <div className="level">
              <p className="que">Q3</p>
              <p className="que">○ ● ○ ○ ○ ○ ○ ○</p>
            </div>
            <div className="next"><div className="nextText">다음</div></div>
          </div>
        </div>
        <div className="footerImg"></div>

      </div >

    </>
  );
};
export default Screen1;


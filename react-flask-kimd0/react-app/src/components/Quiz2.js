import React from 'react'; 

//시나리오 선택 화면

const Quiz2 = (props) => { 
    return ( 
        <> 
            <div className="wrap">
      <div className="header">
        <div className="campus"><div className='incam'></div></div>
      </div>
      <div className="sec1"></div>
      <div className="sec2">
        <div className="quizButton">
          <button className="quiz2Left">A</button>
          <button className="quiz2Center">B</button>
          <button className="quiz2Right">C</button>
        </div>
      </div>
      <div className="footer">
        <div className="levelsec">
          <div className="pre"><div className="preText">이전</div></div>
          <div className="level">
            
          </div>
          <div className="next"><div className="nextText">다음</div></div>
        </div>
        <div className="footerImg"></div>
      </div>
    </div >
        </> 
    ); 
}; 
export default Quiz2;


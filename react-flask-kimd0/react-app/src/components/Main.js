import React from 'react'; 
import { Link } from 'react-router-dom'; 

//시나리오 선택 화면

function Scene() {
    return <div className="wrap">
      <div className="header">
        <div className="campus"><div className='incam'></div></div>
      </div>
      <div className="sec1"></div>
      <div className="sec2"></div>
      <div className="footer">
        <div className="levelsec">
          <div className="pre"><div className="preText">이전</div></div>
          <div className="level">
            <p className="que">Q3</p>
            <p className="que">○ ● ○ ○ ○ ○ ○ ○</p>
          </div>
          <div className="next"><div className="nextText">다음</div></div>
        </div>
        <div className="footerImg"></div>
      </div>
    </div >
  }
  
  function Quiz() {
    return <div className="wrap">
      <div className="header">
        <div className="campus"><div className='incam'></div></div>
      </div>
      <div className="sec1"></div>
      <div className="sec2">
        <div className="quizButton">
          <div className="quizLeft"></div>
          <div className="quizBar"></div>
          <div className="quizRight"></div>
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
  }
  
  function Quiz2() {
    return <div className="wrap">
      <div className="header">
        <div className="campus"><div className='incam'></div></div>
      </div>
      <div className="sec1"></div>
      <div className="sec2">
        <div className="quizButton">
          <div className="quizLeft"></div>
          <div className="quizCenter"></div>
          <div className="quizRight"></div>
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
  }

const Main = (props) => { 
    return ( 
        <> 
            <h3>안녕하세요. 메인페이지 입니다.</h3> 
            <ul> 
                <Link to="/screen1">
                    <li>1번상품</li>
                </Link> 
                <Link to="/product/2">
                    <li>2번상품</li>
                </Link> 
                <Link to="/result">
                    <li>result</li>
                </Link>
            </ul> 
        </> 
    ); 
}; 
export default Main;


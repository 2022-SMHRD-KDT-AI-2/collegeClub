import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div>
      <Quiz2></Quiz2>
    </div>
  );
}

export default App;
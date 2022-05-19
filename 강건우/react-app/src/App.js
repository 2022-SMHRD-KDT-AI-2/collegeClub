import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <div className="campus"><div className='incam'></div></div>
          <div className='screen1'><div className="screen2"></div>
            전개화면
          </div>
        </div>
        <div className="sec1"></div>
        <div class="sec2"></div>
        <div className="footer">
          <div className="levelsec">
            <div className="pre">이전</div>
            <div className="level">
              <p className="que">Q3</p>
              <p className="que">○ ● ○ ○ ○ ○ ○ ○</p>
            </div>
            <div className="next">다음</div>


          </div>
          <div class="footerImg"></div>
        </div>

      </div>
    </div>
  );
}

export default App;

import React from 'react'; 
import './result.css';
import Img1 from '../img/jin01.jpeg'

function result() {
    return (
      <div>
            <h3>테스트 결과</h3>
            <h5>당신은 00 유형입니다.</h5>
            <div className='res'>
                <div className='res1'>
                    <div className='stat1'>
                        <img src={Img1}></img>
                    </div>
                    <div className='result1'>1</div>
                </div>
                <div className='res2'>
                    <div className='stat2'></div>
                    <div className='result2'></div>
                </div>
            </div>
            
            <div className='resultText'></div>


            <div className='menubar'></div>

            <div className='btn'>
                <button type='button' className='btn1'>button1</button>
                <button type='button' className='btn2'>button2</button>
            </div>
      </div>
    );
}

export default result;
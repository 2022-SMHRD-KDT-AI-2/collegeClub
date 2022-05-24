import React from 'react';
import './Screen3.css';
//import '../game/control.js'


const Screen1 = (props) => {
    return (
        <>
            <div className="wrap">
                <div>
                    <div className="main">
                        <canvas id="canvas" width="300" height="300"></canvas>
                        <p className="timer1"></p>
                        <button className="send">버튼</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Screen1;


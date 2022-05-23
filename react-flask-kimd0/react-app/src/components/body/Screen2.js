import React from 'react';
import './Screen2.css';


const Screen2 = (props) => {
    return (
        <>
            <div className="wrap">
                <div className="sec13">
                    <div className='datGroup'>
                        <div className='dat'>{props.data[0]}</div>
                        <div className='dat'>{props.data[1]}</div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Screen2;
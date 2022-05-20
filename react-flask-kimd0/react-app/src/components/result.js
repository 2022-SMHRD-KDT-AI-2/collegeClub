import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './result.css';
import Img1 from '../img/jin01.jpeg'

function useResult() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://220.80.33.51:8083/result`
                );
                setLoading(false);
                setData(response.data[0]);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (

        <div>
            {loading ? (
                'loading...'
            ) : (









                <div className='wrap'>
                    <div className='Header'>
                        <div className='title'>테스트 결과</div>
                        <div className='TypeResult'>당신은 {data} 유형입니다</div>
                    </div>


                    <div className='section'>
                        <div className='Hexagon1'></div>
                        <div className='point1'></div>
                        <div className='point2'></div>
                        <div className='Hexagon2'></div>










                    </div>







                </div>









            )
            }

        </div>
    );
}

export default useResult;
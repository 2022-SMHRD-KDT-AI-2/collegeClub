import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';

import Header from './header/Header';


import './result.css';



var i = 50;
function useResult() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);

    const data2 = [ // 차트에 들어갈 data를 먼저 지정해주고!
        {
            type: 'scatterpolar', // chart type
            r: [0, 50, 50, 50, 28, 50, 0], // data
            theta: ['관습', '탐구', '현실', '예술', '사회', '진취', '관습'], // data category
            fill: 'toself', // fill option
            name: 'Group A' // data group name
        }
    ]

    const data3 = [ // 차트에 들어갈 data를 먼저 지정해주고!
        {
            type: 'scatterpolar', // chart type
            r: [100, 0, 50, 50, 28, 39, 100], // data
            theta: ['추론', '암기', '순발', '통찰', '관찰', '문해'], // data category
            fill: 'toself', // fill option
            name: 'Group B' // data group name
        }
    ]

    const layout = { // data를 꾸며주는 layout을 지정!
        width: 320,
        height: 250,

        polar: {
            radialaxis: { // 방사축이라는 의미인데 아래 그림에서 파란색으로 표시된 부분을 말한다!
                visible: false, // 방사축 display
                range: [100, 0] // 방사축의 시작값, 끝 값
            }
        }

    }

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
                    <Header></Header>
                    <div className='Header'>
                        <div className='title'>테스트 결과</div>
                        <div className='TypeResult'>당신은 <span className='Result'>{data}</span> 유형입니다</div>
                    </div>


                    <div className='section'>
                        <div className='section1'>
                            <div className='HexaLi'> <Plot data={data2} layout={layout} debug enableFullPlotly /></div>

                            <div className='Poi1'><div className='point1'>
                                <div>
                                    <progress></progress>
                                </div>
                                <div>
                                    <progress value={i} max="100"></progress>
                                </div>

                                <div>
                                    <progress value="20" max="200"></progress>
                                </div>
                            </div></div>

                            <div className='Poi2'> <div className='point2'>
                                <div>
                                    <progress></progress>
                                </div>

                                <div>
                                    <progress value="20" max="100"></progress>
                                </div>

                                <div>
                                    <progress value="20" max="200"></progress>
                                </div>
                            </div></div>
                            <div className='innerHexa2'>
                                <div className='HexaLi2'> <Plot data={data3} layout={layout} debug enableFullPlotly /></div>
                            </div>

                        </div>
                        <div className='result'></div>

                        <div className='Buttonsection'>
                            <div className='shareButton'><button className='Butt1' type='button'>결과 공유하기</button></div>
                            <Link to='/result2'>
                                <div className='restartButton'><button className='Butt2' type='button'>다음으로</button></div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
            }

        </div>
    );
}

export default useResult;
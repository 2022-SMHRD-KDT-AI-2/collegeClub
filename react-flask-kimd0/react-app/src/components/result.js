import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, FunnelChart } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Menubar from './menubar/Menubar'




import './result.css';




function Data(props) {
    let top1 = 0;
    let top2 = 0;
    Number(top2);
    let ttop1 = 0;
    Number(ttop1);
    let ttop2 = 0;
    Number(ttop2);
    let top1Name = '';
    let top2Name = '';
    let ttop1Name = '';
    let ttop2Name = '';

    const data = [
        {
            subject: '관습',
            A: props.data[0]
        },
        {
            subject: '현실',
            A: props.data[1]
        },
        {
            subject: '사회',
            A: props.data[2]
        },
        {
            subject: '탐구',
            A: props.data[3]
        },
        {
            subject: '예술',
            A: props.data[4]
        },
        {
            subject: '진취',
            A: props.data[5]
        },
    ];


    console.log(props.data);
    ttop1 = props.data[0];
    for (let i = 0; i < 6; i++) {
        if (top1 < props.data[i]) {
            top1 = props.data[i];
            top1Name = data[i]
        }
        if (top1 != props.data[i] && ttop1 <= props.data[i]) {
            ttop1 = props.data[i]
            ttop1Name = data[i]

        }
    }

    const data2 = [
        {
            subject: '추론',
            A: 50
        },
        {
            subject: '암기',
            A: 40
        },
        {
            subject: '순발',
            A: 50
        },
        {
            subject: '통찰',
            A: 50
        },
        {
            subject: '관찰',
            A: 30
        },
        {
            subject: '문해',
            A: 40
        },
    ];
    ttop2 = props.data[0];
    for (let i = 0; i < 6; i++) {
        if (top2 < props.data[i]) {
            top2 = props.data[i];
            top2Name = data2[i]

        } if (top2 != props.data[i] && ttop2 <= props.data[i]) {
            ttop2 = props.data[i]
            ttop2Name = data2[i]
        }
    }


    return (
        <>



            <div className='wrap'>
                <div className='Header'>
                    <div className='title'>테스트 결과</div>
                    <div className='TypeResult'>당신은 <span className='Result'>{top1Name['subject']} {top2Name['subject']}</span> 유형입니다</div>
                </div>
                <div className='section'>
                    <div className='section1'>
                        <div className='HexaLi'>
                            <ResponsiveContainer width="90%" height="90%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className='Poi1'><div className='point1'>
                            <div>
                                <progress></progress>
                            </div>
                            <div className='progress'>
                                <progress value={top1} max="100"></progress>
                            </div>

                            <div>
                                <progress value={ttop1 - 10} max="100"></progress>
                            </div>
                        </div></div>

                        <div className='Poi2'> <div className='point2'>
                            <div>
                                <progress></progress>
                            </div>

                            <div>
                                <progress value={top2 - 5} max="100"></progress>
                            </div>

                            <div>
                                <progress value={ttop2 - 10} max="100"></progress>
                            </div>
                        </div></div>
                        <div className='innerHexa2'>
                            <div className='HexaLi2'>
                                <ResponsiveContainer width="90%" height="90%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="subject" />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </div>
                    <div className='result'>

                        <div className='firstType'>당신의 성향은 <span className='type1'>{top1Name['subject']} {top2Name['subject']}</span>유형으로 각각 <span className='type2'>{top1}, {top2-5}</span>점 입니다</div>

                        <div className='secondType'>그 다음 성향은 <span className='type1'>{ttop1Name['subject']} {ttop2Name['subject']}</span>유형으로 점수가 <span className='type2'>{ttop1 - 5}, {ttop2 - 10}</span>점 이네요</div>
                    </div>

                    <button className='resultShare' type='button'>결과 공유하기</button>
                    <Link to='/result2'>
                        <button className='resultNext' type='button'>다음으로</button>
                    </Link>

                </div>

            </div>
            <Menubar></Menubar>
        </>
    )

}
function useResult() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);


    useEffect((data) => {
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
                <Data data={data}></Data>
            )
            }

        </div>
    );
}

export default useResult;
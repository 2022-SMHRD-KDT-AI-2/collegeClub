import React from 'react';
import './sce1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Menubar from '../menubar/Menubar';
import Screen1 from '../body/Screen1';
import Screen2 from '../body/Screen2';
import Screen3 from '../body/Screen3';
import Screen3C from '../body/Screen3 copy';
import Screen4 from '../body/Screen4';

let num;
let stat1_num;
let stat1;

function Order(props) {
    const [data, setData] = useState(true);
    const [img, setImg] = useState(true);
    const [act, setAct] = useState(0);
    
    useEffect((data) => {
        const fetchData = async () => {
            try {
                console.log(num)
                const response = await axios.get(
                    `http://220.80.33.51:8083/text?num=` + (num + 1)
                );
                const response2 = await axios.get(
                    `http://220.80.33.51:8083/img?num=` + (num + 1)
                );
                setImg(response2.data);
                setData(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [num]);

    console.log(data[0])
    if (props.category[act].sce_category === 1) {
        return (
            <>
                <Screen1 data={data} img={img} />
                {Bottom()}
            </>
        )
    } else if (props.category[act].sce_category === 2) {
        return (
            <>
                <Screen2 data={data} img={img} />
                {Bottom2()}
            </>
        );
    } else if (props.category[act].sce_category === 3) {
        return (
            <>
                <Screen3C data={data} img={img} />
                {Bottom()}
            </>
        );
    } else {
        return (
            <>
                <Screen4 stat1 = {stat1}></Screen4>
                <div className='bottom'>
                    <Link to="/result">
                        <button type='button' className='next1'>결과보기</button>
                    </Link>
                </div>
            </>
        )
    }
    function Bottom() {
        return (
            <div className='bottom'>
                <div className='sce1Button'>
                    <button type='button' onClick={() => {
                        num = act - 1;
                        if (num < 1) {
                            num = 0;
                        }
                        setAct(num);
                    }} className='pre1'>이전</button>

                    <button type='button' onClick={() => {
                        if (num === props.len-1) {
                        }
                        num = act + 1;
                        setAct(num);
                    }} className='next1'>다음</button>
                </div>
            </div>
        );
    }
    function Bottom2() {
        return (
            <div className='bottom'>
                <div className='sce2Button'>
                    <button className='pre' type='Button' name='Hair' onClick={() => {
                        stat11();
                        console.log(stat1)
                        num = act + 1;
                        if (num === props.len) {
                            num = props.len - 1;
                        }
                        setAct(num);
                    }}>A</button>
                    <div className='buttonBar'></div>
                    <button className='next' type='Button' name='Hair' onClick={() => {
                        stat12();
                        console.log(stat1)
                        num = act + 1;
                        if (num === props.len) {
                            num = props.len - 1;
                        }
                        setAct(num);
                    }}>B</button>
                </div>
            </div>
        )
    }

}


function stat11() {
    if (stat1_num === 0) {
        stat1[4] = stat1[4] + 15;
        stat1[5] = stat1[5] - 15;
        stat1[0] = stat1[0] - 5;
        stat1[1] = stat1[1] + 5;
        stat1[2] = stat1[2] + 5;
        stat1[3] = stat1[3] - 5;
    }
    if (stat1_num === 1) {
        stat1[2] = stat1[2] + 15;
        stat1[3] = stat1[3] - 15;
        stat1[0] = stat1[0] + 5;
        stat1[1] = stat1[1] - 5;
        stat1[4] = stat1[4] + 5;
        stat1[5] = stat1[5] - 5;
    }
    if (stat1_num === 2) {
        stat1[0] = stat1[0] + 15;
        stat1[1] = stat1[1] - 15;
        stat1[2] = stat1[2] + 5;
        stat1[3] = stat1[3] - 5;
        stat1[4] = stat1[4] - 5;
        stat1[5] = stat1[5] + 5;
    }
    if (stat1_num === 3) {
        stat1[2] = stat1[2] + 15;
        stat1[3] = stat1[3] - 15;
        stat1[0] = stat1[0] + 5;
        stat1[1] = stat1[1] - 5;
        stat1[4] = stat1[4] + 5;
        stat1[5] = stat1[5] - 5;
    }
    if (stat1_num === 4) {
        stat1[0] = stat1[0] + 15;
        stat1[1] = stat1[1] - 15;
        stat1[2] = stat1[2] + 5;
        stat1[3] = stat1[3] - 5;
        stat1[4] = stat1[4] - 5;
        stat1[5] = stat1[5] + 5;
    }
    if (stat1_num === 5) {
        stat1[4] = stat1[4] + 15;
        stat1[5] = stat1[5] - 15;
        stat1[0] = stat1[0] - 5;
        stat1[1] = stat1[1] + 5;
        stat1[2] = stat1[2] + 5;
        stat1[3] = stat1[3] - 5;
    }
    stat1_num += 1;
}

function stat12() {
    if (stat1_num === 0) {
        stat1[4] = stat1[4] - 15;
        stat1[5] = stat1[5] + 15;
        stat1[0] = stat1[0] + 5;
        stat1[1] = stat1[1] - 5;
        stat1[2] = stat1[2] - 5;
        stat1[3] = stat1[3] + 5;
    }
    if (stat1_num === 1) {
        stat1[2] = stat1[2] - 15;
        stat1[3] = stat1[3] + 15;
        stat1[0] = stat1[0] - 5;
        stat1[1] = stat1[1] + 5;
        stat1[4] = stat1[4] - 5;
        stat1[5] = stat1[5] + 5;
    }
    if (stat1_num === 2) {
        stat1[0] = stat1[0] - 15;
        stat1[1] = stat1[1] + 15;
        stat1[2] = stat1[2] - 5;
        stat1[3] = stat1[3] + 5;
        stat1[4] = stat1[4] + 5;
        stat1[5] = stat1[5] - 5;
    }
    if (stat1_num === 3) {
        stat1[2] = stat1[2] - 15;
        stat1[3] = stat1[3] + 15;
        stat1[0] = stat1[0] - 5;
        stat1[1] = stat1[1] + 5;
        stat1[4] = stat1[4] - 5;
        stat1[5] = stat1[5] + 5;
    }
    if (stat1_num === 4) {
        stat1[0] = stat1[0] - 15;
        stat1[1] = stat1[1] + 15;
        stat1[2] = stat1[2] - 5;
        stat1[3] = stat1[3] + 5;
        stat1[4] = stat1[4] + 5;
        stat1[5] = stat1[5] - 5;
    }
    if (stat1_num === 5) {
        stat1[4] = stat1[4] - 15;
        stat1[5] = stat1[5] + 15;
        stat1[0] = stat1[0] + 5;
        stat1[1] = stat1[1] - 5;
        stat1[2] = stat1[2] - 5;
        stat1[3] = stat1[3] + 5;
    }
    stat1_num += 1;
}




function useSce1() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);

    num = 0;
    stat1 = [50, 50, 50, 50, 50, 50];
    stat1_num = 0;
    console.log(stat1);


    useEffect((data) => {
        const fetchData = async () => {
            try {
                console.log(num)
                const response = await axios.get(
                    `http://220.80.33.51:8082/screen?num=1`
                );
                setLoading(false);
                setData(response.data);
                
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
                <>
                    <Order len={data.length} category={data}></Order>
                    <Menubar></Menubar>
                </>
            )
            }

        </div>
    );
}

export default useSce1;


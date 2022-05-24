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
    const [img, setImg] = useState("");
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


    if (props.category[act][3] === 1) {
        return (
            <>
                <Screen1 data={data} img={img} />
                {Bottom()}
            </>
        )
    } else if (props.category[act][3] === 2) {
        return (
            <>
                <Screen2 data={data} img={img} />
                {Bottom2()}
            </>
        );
    } else if (props.category[act][3] === 3) {
        return (
            <>
                <Screen3C data={data} img={img} />
                {Bottom()}
            </>
        );
    } else {
        return (
            <>
                <Screen4></Screen4>
                <div className='bottom'>
                    <Link to="/result">
                        <button type='button' className='next1' onClick={() => PostData()}>ekdma</button>
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
                        num = act + 1;
                        if (num === props.len) {
                            num = props.len - 1;
                        }
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
                        stat1[stat1_num] = stat1[stat1_num] + 10;
                        stat1_num += 1;
                        console.log(stat1)
                        num = act + 1;
                        if (num === props.len) {
                            num = props.len - 1;
                        }
                        setAct(num);
                    }}>A</button>
                    <div className='buttonBar'></div>
                    <button className='next' type='Button' name='Hair' onClick={() => {
                        stat1[stat1_num] = stat1[stat1_num] - 10;
                        stat1_num += 1;
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


async function PostData() {
    const formData = new FormData();
    console.log(stat1)
    formData.append("stat1", stat1);

    try {
        const res = await axios.post(
            `http://220.80.33.51:8083/postData`, //send file to flask 
            formData
        );

        console.log(res.data);
    } catch (error) {
        //응답 실패
        console.error(error);
    }
}

function useSce1() {
    stat1 = [];
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);

    num = 0;
    stat1 = [50, 50, 50, 50, 50, 50];
    stat1_num = 0;

    useEffect((data) => {
        const fetchData = async () => {
            try {
                console.log(num)
                const response = await axios.get(
                    `http://220.80.33.51:8083/screen?num=1`
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


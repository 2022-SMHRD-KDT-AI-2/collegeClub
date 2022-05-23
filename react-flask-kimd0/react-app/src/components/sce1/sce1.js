import React from 'react';
import './sce1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Menubar from '../header/Header'
import Header from '../menubar/Menubar';
import Screen1 from '../body/Screen1';
import Screen2 from '../body/Screen2';
import Screen3 from '../body/Screen3';
import Screen4 from '../body/Screen4';

let num = 0;
let stat1 = [];

function Order(props) {

    
    const [data, setData] = useState(true);
    const [act, setAct] = useState(0);

    useEffect((data) => {
        const fetchData = async () => {
            try {
                console.log(num)
                const response = await axios.get(
                    `http://220.80.33.51:8083/text?num=` + (num + 1)
                );
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
                <Screen1 data = {data}/>
                {Bottom()}
            </>
        )
    } else if (props.category[act][3] === 2) {
        return (
            <>
                <Screen2 data = {data}/>
                {Bottom2()}
            </>
        );
    } else if (props.category[act][3] === 3) {
        return (
            <>
                <Screen3 data = {data}/>
                {Bottom()}
            </>
        );
    } else {
        return (
            <>
                <Screen4></Screen4>
                <div className='bottom'>
                    <button type='button' className='next1' onClick={() => PostData()}>ekdma</button>
                </div>
            </>
        )
    }
    function Bottom() {
        return (
            <div className='bottom'>
                <div className='sce1Button'>
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
                <div className='sce1Button'>
                    <button className='pre' type='Button' name='Hair' onClick={() => {
                        stat1.push(1);
                        console.log(stat1)
                        num = act + 1;
                        if (num === props.len) {
                            num = props.len - 1;
                        }
                        setAct(num);
                    }}>A</button>
                    <button className='next' type='Button' name='Hair' onClick={() => {
                        stat1.push(23);
                        console.log(stat1);
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
    formData.append("file", stat1);
    formData.append("fileName", 'fileName');

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
    const [text, setText] = useState(true);

    num = 0;

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
                    <Header></Header>
                    <Order text={text} len={data.length} category={data}></Order>
                    <Menubar></Menubar>
                </>
            )
            }

        </div>
    );
}

export default useSce1;


import React from 'react';
import './sce1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Screen1 from '../Screen1';
import Screen2 from '../Screen2';
import Screen3 from '../Screen3';
import { Link } from 'react-router-dom';

let num = 0;



function Order(props) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);
    const [act, setAct] = useState(0);

    useEffect((data) => {
        const fetchData = async () => {
            try {
                console.log(num)
                const response2 = await axios.get(
                    `http://220.80.33.51:8083/text?num=` + (num + 1)
                );
                setLoading(false);
                setData(response2.data);


            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [num]);

    if (props.category[act][3] === 1) {
        return (
            <>
                <Screen1 />
                {Bottom()}
            </>
        )
    } else if (props.category[act][3] === 2) {
        return (
            <>
                <Screen2 />
                {Bottom()}
            </>
        );
    } else if (props.category[act][3] === 3) {
        return (
            <>
                <Screen3 />
                {Bottom()}
            </>
        );
    }

    function Bottom() {
        return <div className='bottom'>
            <div className='dat'>
                <a>{data}</a>
            </div>
            <div className='sce1Button'>
                <button type='button' onClick={() => {
                    num = act - 1;
                    if (num < 0) {
                        num = 0;
                    }
                    setAct(num);
                } } className='pre'>이전</button>
                <button type='button' onClick={() => {
                    num = act + 1;
                    if (num === props.len) {
                        num = props.len - 1;
                    }
                    setAct(num);
                } } className='next'>다음</button>
            </div>
        </div>;
    }
}


function useSce1() {
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
                    <Order text={text} len={data.length} category={data}></Order>
                </>
            )
            }

        </div>
    );
}

export default useSce1;


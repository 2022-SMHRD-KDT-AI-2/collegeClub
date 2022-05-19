import React from 'react';
import './sce1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Screen1 from '../Screen1';
import Screen2 from '../Screen2';
import Screen3 from '../Screen3';






function Order(props) {
    const size = props.len;
    
    const [act, setAct] = useState(0);
    const result = props.text.map((text) => text[2] === act+1 ? text[1] : null);

    if (props.category[act][3] === 1) {
        return (
            <>
                <span>{props.category[0]}</span>
                <Screen1 text={result} />
                <div className="levelsec">
                    <button type='button' onClick={() => {
                        let i = act - 1;
                        if(i < 0){
                            i = 0;
                        }
                        setAct(i);
                    }} className='pre'>이전</button>
                </div>
                <div className="levelsec">
                    <button type='button' onClick={() => {
                        let i = act + 1;
                        setAct(i);
                    }} className='next'>다음</button>
                </div>
            </>
        );
    } else if (props.category[act][3] === 2) {
        return (
            <>
                <Screen2 text={props.text} />
                <div className="levelsec">
                    <button type='button' onClick={() => {
                        let i = act - 1;
                        setAct(i);
                    }} className='pre'>이전</button>
                </div>
                <div className="levelsec">
                    <button type='button' onClick={() => {
                        let i = act + 1;
                        setAct(i);
                    }} className='next'>다음</button>
                </div>

            </>
        );
    } else if (props.category[act][3] === 2) {
        return (
            <Screen3 />
        );
    }
}


function useSce1() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);
    const [text, setText] = useState(true);

    useEffect((data) => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://220.80.33.51:8083/screen?num=1`
                );
                const response2 = await axios.get(
                    `http://220.80.33.51:8083/screen/text?num=1`
                );
                setLoading(false);
                setData(response.data);
                setText(response2.data);
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
                    <Order len={data.length} text={text} category={data}></Order>
                </>
            )
            }

        </div>
    );
}

export default useSce1;


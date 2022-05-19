import React from 'react';
import './sce1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Screen1 from '../Screen1';
import Screen2 from '../Screen2';

function Order(props) {
    const [size, setSize] = useState(props.len);
    let act = 0;

    if (props.category[act][3] == 1) {
        return (
            <>
                <Screen1 text={props.text} />
                <div className="levelsec">
                    <div className="pre"> <div className="preText">이전</div></div>
                    <div className="level">
                        <p className="que">Q1</p>
                        <p className="que">● ○ ○ ○ ○ ○ ○ ○</p>
                    </div>
                    <div className="next"><div className="nextText">다음</div></div>
                </div>
            </>
        );
    } else if (props.category[act][3] == 2) {
        return (
            <>
                <Screen2 text={props.text} />
                <button type='button'>12asdasfasfsaf3</button>
            </>
        );
    } else if (props.category[act][3] == 2) {
        return (
            <Screen2 />
        );
    }
}


function useSce1() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);
    const [text, setText] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://220.80.33.51:8083/sceSelect?num=1`
                );
                const response2 = await axios.get(
                    `http://220.80.33.51:8083/screen/text?num=1`
                );
                setLoading(false);
                setData(response.data);
                setText(response2.data);
                console.log(data)
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


import React from 'react';
import './sce1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Screen1 from '../Screen1';
import Screen2 from '../Screen2';

function Order(props){
    if(props.category == 1){
        return(
            <Screen1/>
        );
    }
    if(props.category == 2){
        return(
            <Screen2/>
        );
    }
}


function useSce1() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://220.80.33.51:8083/sceSelect`
                );
                setLoading(false);
                setData(response.data);
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
                    <span>{data.length}</span>
                    <Order category={data[5][3]}></Order>
                </>
            )
            }

        </div>
    );
}

export default useSce1;


import React from 'react';
import axios from 'axios';
import './Screen4.css';
import Header from '../header/Header';


const Screen1 = (props) => {
    PostData();
    return (
        <>
            <Header></Header>

        </>
    );
    async function PostData() {
        const formData = new FormData();
        console.log(props.stat1)
        console.log("123");
        formData.append("stat1", props.stat1);
    
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
};
export default Screen1;


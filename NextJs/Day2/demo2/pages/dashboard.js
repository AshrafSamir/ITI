import React from 'react';
import { useState, useEffect } from 'react';

const dashboard = () => {
    const [isLoading,setIsloading] = useState(true);
    const [dashData,setDashdata] = useState(null);

    useEffect(()=>{
        async function fetchingData(){
            const res = await fetch("http://localhost:1000/dashboard");
            const data = await res.json();
            setDashdata(data[0]);
            setIsloading(false)
        }
        fetchingData()
    },[]);

    if(isLoading) return 'Loading.....'
    return (
        <div>
            <h1>posts : {dashData.posts}</h1>
            <h1>likes : {dashData.likes}</h1>
            <h1>followers : {dashData.followers}</h1>
            <h1>following : {dashData.following}</h1>
        </div>
    );
};

export default dashboard;
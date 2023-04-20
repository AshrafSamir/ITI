import React from 'react';
import useSWR from 'swr';

const fetcher = async()=>{
const res = await fetch("http://localhost:1000/dashboard");
const data = await res.json();
return data[0]
}

const dashboardswr = () => {
    const {data,error} = useSWR('dash',fetcher);
    if(error) return 'error....';
    if(! data) return 'Loading ....'
    return (
        <div>
            <h1>following : {data.following}</h1>
            <h1>posts : {data.posts}</h1>
            <h1>likes : {data.likes}</h1>
            <h1>followers : {data.followers}</h1>
        </div>
    );
};

export default dashboardswr;
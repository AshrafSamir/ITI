import React from 'react';
import {getSession} from 'next-auth/react'

const blog = ({data}) => {
    return (
        <div>
            <h1>Blog  Page</h1>
            <h1>{data}</h1>
        </div>
    );
};

export default blog;
export async function getServerSideProps(context){
const session  = await getSession(context);
if(! session){
    return{
        redirect : {
              destination : `/api/auth/signin?callbackurl=http://localhost:3000/blog`,
              permanent :false
        }
    }
}
return{
    props:{
        data : session? 'list of 100 blogs' : 'list of free blogs'
    }
}
}
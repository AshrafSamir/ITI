import React from 'react';
import Link from 'next/link';

const index = ({newss}) => {
    return (
        <div>
            <h1>News Page</h1>
            {
                newss.map((n)=>{
                    return(
                        <div key={n.id}>
                            <h1>{n.id} : {n.title}</h1>
                            <Link href={`/news/${n.category}`}>category</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default index;
export async function getServerSideProps(){
    const res = await fetch(" http://localhost:1000/news");
    const data = await res.json();
    return{
        props:{
            newss : data
        }
    }
}
import React from 'react';

const category = ({neww,category}) => {
    return (
        <>
     
     <h1>{category}</h1>
        {neww.map((n)=>{
            return(
                <div>
                <h2>{n.title}</h2>
                <h2>{n.category}</h2>
                <h2>{n.description}</h2>
            </div>
            )
        })}
           </>
     
    );
};

export default category;
export async function getServerSideProps(context){
    const {params} = context;
    const {category} = params;
    const res = await fetch(` http://localhost:1000/news?category=${category}`);
    const data = await res.json();
    return{
        props:{
            neww:data,
            category
        }
    }

}
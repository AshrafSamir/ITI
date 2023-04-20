import React from "react";
import { useState } from "react";

const index = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    console.log(data);
    setComments(data);
  };

  const postComment =async ()=>{
      const res = await fetch("/api/comments",{
        method:'POST',
        body:JSON.stringify({comment}),
        headers:{
            "Content-Type":"application/json"
        }
      });
      const data = await res.json();
      console.log(data);
      setComment("")

  }

  const deleteComment= async (commentId)=>{
      const res = await fetch(`/api/comments/${commentId}`,{
        method:'DELETE'
      })
      const data = await res.json();
      fetchComments()
  }
  return (
    <div>
      <button onClick={fetchComments}>get all comments</button>
      {comments.map((comment) => {
        return (
            <div key={comment.id}>
          <h1>
            {comment.id} : {comment.text}
          </h1>
          <button onClick={()=>deleteComment(comment.id)}>delete</button>
          </div>
        );
      })}
      <hr></hr>
      <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
      <button onClick={postComment}>add a comment</button>
    </div>
  );
};

export default index;

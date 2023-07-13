import React from "react"
import { useState } from "react"
import "./comments.css"
import Displaycomments from "./displaycomments";

function Comments(){

    const [commenttext,setcommenttext] = useState("");
    
    const handlesubmit = (e)=>{
        e.preventDefault();
    }

    const comments = [
        {
            _id : 1,
           cmttxt : "hii",
           cmtperson : "kalyan"
        },
        {
            _id:2,
            cmttxt : "hello",
            cmtperson : "sasi"
        }
    ]

   return(
    <>
    <form class="comments_container" onSubmit={handlesubmit}>
        <input type="text" value={commenttext} placeholder="add comment..." class="comment_input" onChange={(e) => setcommenttext(e.target.value)}></input>
        <input type="submit" value="comment" class="comment_submit"></input>
    </form>
    <div class="display_comments">
        {comments.map((m)=>{
            return(
            <Displaycomments 
              cmtid = {m._id}
              cmttxt = {m.cmttxt}
              cmtperson = {m.cmtperson}
            />
            )
        })}
    </div>
    </>
   )
}

export default Comments
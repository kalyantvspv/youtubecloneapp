import React from "react"
import {useState} from "react"
import "./comments.css"

function Displaycomments({cmtid,cmttxt,cmtperson}){
 
   const [edit,setedit] = useState(false);
   const [cmtbody,setcmtbdy] = useState("");
   const [cid,setcid] = useState("");

   const handleedit = (x,e)=>{
      setedit(true);
      setcmtbdy(e);
      setcid(x);
   }

   const handlesubmit = (e)=>{
     e.preventDefault();
     setedit(false);
   }
    
   return(
    <>
       {
        edit?(<>
          <form class="comments_container" onSubmit={handlesubmit} >
        <input type="text" value={cmtbody} placeholder="edit comment..." class="comment_input" onChange={(e)=>{setcmtbdy(e.target.value)}}></input>
        <input type="submit" value="comment" class="comment_submit"></input>
       </form>
        </>): (<>
         <p>{cmttxt}</p>
        </>)
       }
       <p> - {cmtperson} commented</p>
        <p class="edit-delete">
                <i onClick={() => handleedit(cmtid,cmttxt)}>Edit</i>
                <i>Delete</i>
        </p>
       
    </>
   )
}

export default Displaycomments
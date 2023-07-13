import React from 'react';
import ShowVideoList from "../showvideolist/showvideolist"

function WHLVideoList({ page,videoList }) {
  return (
    <>
     
        { videoList.map(m=>{
                return(
                    <ShowVideoList videoId={m?._id} key={m?._id}/>
                )
            })
        }
    
    </>
  );
}

export default WHLVideoList
import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";

import "./LikeWatchLaterSaveBtns.css";

function LikeWatchLaterSaveBtns() {
 
  const [SaveVideo, setSaveVideo] = useState(false);
  const [DislikeBtn, setDislikeBtn] = useState(false);
  const [LikeBtn, setLikeBtn] = useState(false);

  function handlesavedvideo(){
    if(SaveVideo === false)
    {
      setSaveVideo(true);
    }
    else{
      setSaveVideo(false);
    }
  }

  function handlelike(){
    if(LikeBtn === false)
    {
      setLikeBtn(true);
      setDislikeBtn(false);
    }
    else{
      setLikeBtn(false);
    }
  }

  function handledislike(){
    if(DislikeBtn === false)
    {
      setDislikeBtn(true);
      setLikeBtn(false);
    }
    else{
      setDislikeBtn(false);
    }
  }
  

  
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>

      <div className="btn_VideoPage">
        <div
          className="like_videoPage"
          onClick={handlelike}
        >
          {LikeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>like</b>
        </div>
        <div
          className="like_videoPage"
          onClick={handledislike}
        >
          {DislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>DISLIKE</b>
        </div>
        <div className="like_videoPage" onClick={handlesavedvideo}>
          {SaveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
            <RiShareForwardLine size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
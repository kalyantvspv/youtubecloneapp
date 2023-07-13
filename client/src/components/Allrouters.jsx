import React from "react"
import {Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Library from "../pages/library/library";
import LikedVideo from "../pages/likedvideos/likedvideos"
import History from "../pages/history/history";
import Watchlater from "../pages/watchlater/watchlater";
import Yourvideos from "../pages/yourvideos/yourvideos";
import VideoPage from "../pages/VideoPage/VideoPage";

function Allroutes()
{
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/likedvideo" element={<LikedVideo/>} />
        <Route path="/history" element={<History />} />
        <Route path="/watchlater" element={<Watchlater/>} />
        <Route path="/yourvideos" element={<Yourvideos />} />
        <Route path="/videopage/:vid" element={<VideoPage />} />
    </Routes>
  )
}

export default Allroutes;
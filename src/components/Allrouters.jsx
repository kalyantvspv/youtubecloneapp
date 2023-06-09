import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Library from "../pages/library/library";
import LikedVideo from "../pages/likedvideos/likedvideos"
import History from "../pages/history/history";
import Watchlater from "../pages/watchlater/watchlater";
import Yourvideos from "../pages/yourvideos/yourvideos";

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
    </Routes>
  )
}

export default Allroutes;
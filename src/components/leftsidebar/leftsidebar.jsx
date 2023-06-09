import React from "react";
import "./drawbar.css"
import {AiOutlineHome} from "react-icons/ai"
import { NavLink,Link } from "react-router-dom"
import {MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary, MdVideoLibrary} from "react-icons/md"
import shorts from "./shorts.png"

function Leftsidebar()
{
  return (
    <div className='container_leftSidebar'>
        <NavLink to={'/'} className='icon_sidebar_div' >
            <AiOutlineHome size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <div className='icon_sidebar_div' >
            <MdOutlineExplore size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Explore</div>
        </div>
        <div className='icon_sidebar_div' >
            <img src={shorts} width={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Shorts</div>
        </div>
        <div className='icon_sidebar_div' >
            <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon" style={{fontSize:"12px"}}>Subcriptions</div>
        </div>
        <NavLink to={'/library'} className='icon_sidebar_div' >
            <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Library</div>
        </NavLink>
    </div>
  )
}

export default Leftsidebar;
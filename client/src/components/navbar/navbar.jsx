import React from 'react'
import './navbar.css'
import logo from './youtube.ico'
import Searchbar from '../searchbar/searchbar'
import { RiVideoAddLine } from 'react-icons/ri'
import { MdNotificationsNone } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Navbar({handleclick})
{


  // const user = null;
  const user = 
  {
   result:{
      name:"kalyan",
      joiningdate: "1january2022"
    }
  }

  return(
    <div>
    <div class="container-top">
       <div class="burger-logo">
          <div class="burger" onClick={()=>handleclick()} >
            <p></p>
            <p></p>
            <p></p>
          </div>
          
            <Link to={"/"} class="logo" style={{textDecoration:"none"}}>
            <img src={logo} alt="logo"></img>
            <p>Youtube</p>
            </Link>
       </div>
       <Searchbar />
       < RiVideoAddLine size={22} class={"videoicon"}/>
       < MdNotificationsNone size={22} class={"videoicon"} />
      
       {/* user logged in or not */}
       {user?(<div>
          <p class="username">{user?.result.name ? <>{user?.result.name.charAt(0).toUpperCase()}</>:<>{user?.result.email.charAt(0).toUpperCase()}</>}</p>
       </div>):
       ( 
         <div class="signin-box">
           <BsPersonCircle size={22} class="signin-icon"/>
           <p>Sign in</p>
         </div>
         )}
    </div>
      
   
    
    </div>
  )
}

export default Navbar;


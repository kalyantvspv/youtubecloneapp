import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import './searchbar.css'
import Searchlist from './searchlist'
import { useState } from 'react'

function Searchbar()
{
  const [searchword,setsearchword] = useState("");
  const [showlist,setshowlist] = useState(false);

  const words =["kalyan","pavan","joshika","sasi","rajavathi","kondalrao"].filter(e=>e.toUpperCase().includes(searchword.toUpperCase()));
  return(
    <>
       <div class="search-container">
          <input type="text" placeholder='Search...' 
          value = {searchword}
          onChange={e=>{
            setsearchword(e.target.value);
          }}
          onClick={e=>{
            setshowlist(true);
          }}
          ></input>
          <FaSearch class="search-button" 
           onClick={e=>{
            setshowlist(false);
           }}
          />
          <BsMicFill class="mic"/>
          {searchword && showlist && <Searchlist 
          wordarray={words}  
          setsearchword = {setsearchword}
           />}
       </div>
    </>
  )
}

export default Searchbar;
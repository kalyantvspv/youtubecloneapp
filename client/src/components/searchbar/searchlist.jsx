import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchlist(props)
{
  return(
    <div class="searchlistcontainer">
           
            {(props.wordarray).map((e)=>{
                return  (<p key={e} onClick={m => props.setsearchword(e)}>
                    <FaSearch />
                    {e}
                    </p>
                )
            })}
    </div>
  )
}

export default Searchlist
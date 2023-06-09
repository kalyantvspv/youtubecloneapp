import React from "react"
import "./home.css"
import Leftsidebar from "../../components/leftsidebar/leftsidebar";

function Home()
{
   return(
     <div class="homecontainer">
        <Leftsidebar />
        <div class="homecontainer2">
            Home
        </div>         
     </div>
   )
}
export default Home;
import React from "react"
import "./home.css"
import Leftsidebar from "../../components/leftsidebar/leftsidebar";
import ShowVideoGrid from "../../components/showvideogrid/showvideogrid";
import vid from  "../../components/video/vid.mp4"

function Home()
{
    const vids = [
        {
          _id: 1,
          video_src: vid,
          Chanel: "62bafe6752cea35a6c30685f",
          title: "video 1",
          Uploder: "abc",
          description: "description of  video 1",
        },
        {
          _id: 2,
          video_src: vid,
          Chanel: "cdd",
          title: "video 2",
          Uploder: "abc",
          description: "description of  video 2",
        },
        {
          _id: 3,
          video_src: vid,
          Chanel: "add",
          title: "video 3",
          Uploder: "abc",
          description: "description of  video 3",
        },
        {
          _id: 4,
          video_src: vid,
          Chanel: "add",
          title: "video 3",
          Uploder: "abc",
          description: "description of  video 3",
        },
      ];

      const navlist =[
        "All",
        "Gaming",
        "Live",
        "Music",
        "Cricket",
        "C++",
        "Java",
        "Python"
      ]

   return(
     <div class="homecontainer">
        <Leftsidebar />
        <div class="homecontainer2">
        <div className="navlist_container">
          {
            navlist.map( m =>{
            return(
              <p key={m} className="navlist_element">{m}</p>
            )
            })
          }
        </div>
            <ShowVideoGrid vids={vids} />
        </div>         
     </div>
   )
}
export default Home;
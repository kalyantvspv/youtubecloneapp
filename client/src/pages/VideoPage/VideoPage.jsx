import React from "react";
import vid from "../../components/video/vid.mp4"
import './VideoPage.css'
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../components/comments/comments";

function VideoPage()
{
    return(
    <>
       <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
                <video
                src={vid}
                className={"video_ShowVideo_videoPage"}
                controls
                // autoPlay
                ></video>
          
         <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">Title</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    5 views <div className="dot"></div>uploaded 1 year ago
                  </div>
                    <LikeWatchLaterSaveBtns />
                </div>
              </div>
          </div>

          <div className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p>K</p>
                </b>
                <p className="chanel_name_videoPage">kalyan</p>
            </div>
              <div className="comments_VideoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                 <Comments />
              </div>
          </div>
          <div className="moreVideoBar">More videos</div>
        </div>
         </div>
    </>
    );
}

export default VideoPage;
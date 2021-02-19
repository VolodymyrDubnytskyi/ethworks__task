import React, { useEffect } from "react";
import video from "../../assets/header_video.mp4";
import videoPoster from "../../assets/mainVideo.svg";
import Plyr from 'plyr';



const HeaderVideo = () => {
  useEffect(()=>{
    new Plyr('#player');
  })
  return (
    <div className="video">
      <video id="player" playsInline controls data-poster='../../assets/mainVideo.svg'>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
export default HeaderVideo;

import React from "react";
import ReactPlayer from "react-player";
import video_start_icon from "assets/images/layout/video_start_icon.svg";
import header_video from "assets/video/header_video.mp4";

const HeaderVideo = () => {
  return (
    <div className="video">
      <ReactPlayer
        light={video_start_icon}
        width="100%"
        height="100%"
        controls={true}
        url={header_video}
      />
    </div>
  );
};

export default HeaderVideo;

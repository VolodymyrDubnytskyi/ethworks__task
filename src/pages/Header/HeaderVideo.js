import React from "react";
import ReactPlayer from "react-player";
import video_start_icon from "assets/video_start_icon.svg";

const HeaderVideo = () => {
  return (
    <div className="video">
      <ReactPlayer
        light={video_start_icon}
        width="100%"
        height="100%"
        controls={true}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </div>
  );
};
export default HeaderVideo;

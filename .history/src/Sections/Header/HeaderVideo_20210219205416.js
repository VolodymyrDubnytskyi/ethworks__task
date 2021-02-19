import React, { useEffect } from "react";
import video from "../../assets/header_video.mp4";
import Plyr from "plyr";

const HeaderVideo = () => {
  useEffect(() => {
    new Plyr("#player");
  });
  return (
    <div className="video">
      <video id="player" playsInline controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
export default HeaderVideo;

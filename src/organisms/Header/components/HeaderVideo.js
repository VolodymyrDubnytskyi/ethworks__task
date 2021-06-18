import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";
import header_video from "assets/video/header_video.mp4";
import videoIcon from "assets/images/videoIcon.jpg";
import "react-responsive-modal/styles.css";
import CustomLoader from "atoms/CustomLoader";

const HeaderVideo = () => {
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      {!isLoaded && <CustomLoader />}
      <div className={`video ${isLoaded && "video--active"}`}>
        <img src={videoIcon} alt="play" onLoad={() => setIsLoaded(true)} />
        <div className="play-circle" onClick={onOpenModal}>
          <i className="fa fa-play" />
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            url={header_video}
          />
        </Modal>
      </div>
    </>
  );
};

export default HeaderVideo;

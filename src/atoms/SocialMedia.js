import React from "react";

const SocialMediaContainer = ({ link, name }) => {
  return (
    <div className="social_media__container">
      <a href={link}>
        <i className={`fab fa-${name}`}></i>
      </a>
    </div>
  );
};

export default SocialMediaContainer;

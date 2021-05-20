import React from "react";
import socialMedia from "data/socialMedia";
import SocialMedia from 'atoms/SocialMedia';

const SocialMediaContainer = () => {
  return (
    <div className="social_media">
      {socialMedia.map((item) => {
        const { link, name, id } = item;
        return <SocialMedia key={id} name={name} link={link} />;
      })}
    </div>
  );
};

export default SocialMediaContainer;

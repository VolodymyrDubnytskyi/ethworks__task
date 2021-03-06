import React from "react";

const PersonSocialMedia = ({ facebook, linkedin }) => {
  return (
    <div className="person__links">
      <a href={facebook} className="person__link">
        <i className="fab fa-facebook-f" />
      </a>
      <a href={linkedin} className="person__link">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  );
};

export default PersonSocialMedia;

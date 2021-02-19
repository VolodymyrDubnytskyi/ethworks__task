import React from "react";

const PersonSocialMedia = (props) => {
  const { facebook, linkedin } = props;
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

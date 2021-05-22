import React from "react";

const FooterContact = ({ title, email }) => {
  return (
    <div className="footer__contactContainer">
      <h3 className="footer__contactHeading">{title}</h3>
      <a href="#" className="footer__contactEmail">{email}</a>
    </div>
  );
};

export default FooterContact;

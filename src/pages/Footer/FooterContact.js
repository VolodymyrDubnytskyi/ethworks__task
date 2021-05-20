import React from "react";

const FooterContact = ({ title, email }) => {
  return (
    <div className="footer__contact_container">
      <h3 className="footer__contact_heading">{title}</h3>
      <a href="#" className="footer__contact_email">{email}</a>
    </div>
  );
};
export default FooterContact;

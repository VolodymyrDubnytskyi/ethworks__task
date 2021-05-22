import React from "react";

const CustomCheckbox = () => {
  return (
    <label className="contact__checkboxLabel">
      Chekbox
      <input type="checkbox" name="checkbox" className="contact__checkbox" />
      <span className="contact__checkmark"></span>
    </label>
  );
};

export default CustomCheckbox;

import React from "react";

const CustomInput = ({ type, nameOfClass, placeholderText }) => {
  return (
    <input
      type={type}
      className={`input ${nameOfClass}`}
      placeholder={placeholderText}
    />
  );
};

export default CustomInput;

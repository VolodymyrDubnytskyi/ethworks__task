import React from "react";

const Input = ({ type, nameOfClass, placeholderText }) => {
  return (
    <input
      type={type}
      className={`input ${nameOfClass}`}
      placeholder={placeholderText}
    />
  );
};
export default Input;

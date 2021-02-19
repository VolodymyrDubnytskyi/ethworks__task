import React from "react";

const Input = (props) => {
  const { type, nameOfClass, placeholderText } = props;
  return (
    <input
      type={type}
      className={`input ${nameOfClass}`}
      placeholder={placeholderText}
    />
  );
};
export default Input;

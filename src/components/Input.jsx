import React from "react";

const Input = ({
  htmlFor,
  labelText,
  type,
  id,
  name,
  handleChange,
  value,
  pattern,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}: </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        style={{ marginRight: "16px" }}
      />
    </>
  );
};
export default Input;

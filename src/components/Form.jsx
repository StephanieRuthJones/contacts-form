import React from "react";

const Form = ({handleSubmit, handleNameChange, name, handlePhoneNumChange, phoneNum}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        onChange={handleNameChange}
        value={name}
        placeholder="First and Last Names"
        style={{ marginRight: "16px" }}
      />
      <label>Phone Number: </label>
      <input
        type="tel"
        onChange={handlePhoneNumChange}
        value={phoneNum}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="111-222-3333"
        style={{ marginRight: "16px" }}
      />

      <input type="submit" />
    </form>
  );
};
export default Form;

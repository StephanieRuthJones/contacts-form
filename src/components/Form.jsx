import React from "react";
import Input from "./Input";
const Form = ({
  handleSubmit,
  handleNameChange,
  name,
  handlePhoneNumChange,
  phoneNum,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        htmlFor="name-field"
        labelText="Name"
        type="text"
        id="name-field"
        name="name"
        handleChange={handleNameChange}
        value={name}
        placeholder="First and Last Names"
        style={{ marginRight: "16px" }}
      />
      <Input
        type="tel"
        htmlFor="phone-field"
        labelText="Phone Number"
        id="phone-field"
        name="phone"
        handleChange={handlePhoneNumChange}
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

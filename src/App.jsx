import React, { useState } from "react";
import Greeting from "./components/Greeting.jsx";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";
import ContactsList from "./components/ContactsList.jsx";
import Form from "./components/Form"
const App = ({ createContact, deleteContact, contacts }) => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneNumChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNum) {
      return;
    }
    const contact = {
      name,
      phoneNum,
    };
    createContact(contact);
    setName("");
    setPhoneNum("");
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
    deleteContact(index);
  };

  return (
    <div>
      <Greeting />
      <h1>React-Redux Contacts List Challenge</h1>
      <hr />
      <ContactsList contacts={contacts} handleDelete={handleDelete} />
      <div>
        <h3>Add Contact</h3>
        <Form
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          name={name}
          handlePhoneNumChange={handlePhoneNumChange}
          phoneNum={phoneNum}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ contacts }, ownProps) => {
  return {
    contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

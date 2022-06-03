import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";

describe("Input component", () => {
  const name = 'Steph'
  const phoneNum = '777-888-9999'
it("should let users type name into input", () => {
     userEvent.type(getNameInput()) 
    });
});
const getNameInput = () => screen.getByLabelText(/name/i);
const getPhoneInput = () => screen.getByLabelText(/phone number/i);
const getSubmitButton = () => screen.getByRole("button", { name: /submit/i });

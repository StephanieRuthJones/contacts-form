import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";

describe("Form component", () => {
  const name = 'Steph'
  const phoneNum = '777-888-9999'
  it("should submit name and phone number", () => {
    // PHASE 1
      const handleSubmit = jest.fn((e) => e.preventDefault());
    // render(<Form handleSubmit={handleSubmit} />)
    // const nameInput = screen.getByLabelText(/name/i)
    // fireEvent.change(nameInput, {target: {value: 'Steph'}})
    // // userEvent.type(nameInput, 'Steph')
    // const phoneNumInput = screen.getByLabelText(/phone number/i)
    // fireEvent.change(phoneNumInput, {target: {value: '999-999-9999'}})
    // // userEvent.type(phoneNumInput, '777-888-9999')
    // const submitButton = screen.getByRole('button', { name: /submit/i })
    // userEvent.click(submitButton)
    // // screen.getByRole('textbox', { name: /name:/i })
    // // screen.getByRole('textbox', { name: /phone number:/i })

    // PHASE 2 - make test more readable by creating get funcs for each input
    // const handleSubmit = jest.fn(e => e.preventDefault());

      render(<Form handleSubmit={handleSubmit} name={name} phoneNum={phoneNum} />);
    userEvent.type(getNameInput(), name);
    userEvent.type(getPhoneInput(), phoneNum);
    userEvent.click(getSubmitButton());

      expect(handleSubmit).toBeCalled();      
  });
//   it("should allow users to type name into form", () => {
//     render(<Form />);
//     userEvent.type(getNameInput(), name);
//     expect(getNameInput().value).toEqual(name);
//   });
//   it("should allow users to type phone number into form", () => {
//     render(<Form />);
//     userEvent.type(getPhoneInput(), phoneNum);
//     expect(getPhoneInput().value).toEqual(phoneNum);
//   });
});
const getNameInput = () => screen.getByLabelText(/name/i);
const getPhoneInput = () => screen.getByLabelText(/phone number/i);
const getSubmitButton = () => screen.getByRole("button", { name: /submit/i });

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from "../components/Form"

describe("Form component", () => {
    it('should submit name and phone number', () => {
        const handleSubmit = jest.fn(e => e.preventDefault())
        render(<Form handleSubmit={handleSubmit} />)
        // screen.getByRole('textbox', { name: /name:/i })
        // screen.getByRole('textbox', { name: /phone number:/i })
        const nameInput = screen.getByLabelText(/name/i)
        userEvent.type(nameInput, 'Steph')
        const phoneNumInput = screen.getByLabelText(/phone number/i)
        userEvent.type(phoneNumInput, '777-888-9999')
        const submitButton = screen.getByRole('button', { name: /submit/i })
        userEvent.click(submitButton)
    })
})
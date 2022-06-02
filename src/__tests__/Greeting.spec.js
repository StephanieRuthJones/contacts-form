
import React from "react"
import {render, cleanup} from "@testing-library/react"
import Greeting from "../components/Greeting"

afterEach(cleanup)

describe("Greeting", () => {  
  it("greets the user", () => {
    const {asFragment} = render(<Greeting name={"Qualified"} />)
    expect(asFragment()).toMatchSnapshot()
  })
  
  it("greets the user when the name is unknown", () => {
    const {asFragment} = render(<Greeting />)
    expect(asFragment()).toMatchSnapshot()
  })
})
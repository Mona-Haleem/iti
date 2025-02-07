
import {render , screen} from "@testing-library/react";

import "@testing-library/jest-dom";

import React from "react";
import UserProfile from "../componenets/UserProfile";

test("user data is rendered correctly when the user prop is provided.",()=>{
 let userData = { name: "John", age: 30 };
 render(<UserProfile user={userData} />)

 expect(screen.getByText(`Name: ${userData.name} - Age: ${userData.age}`)).toBeInTheDocument()

})

test("'No user data available' is rendered correctly when no user data provided.",()=>{
    render(<UserProfile  />)
    expect(screen.getByText("No user data available.")).toBeInTheDocument()   
})
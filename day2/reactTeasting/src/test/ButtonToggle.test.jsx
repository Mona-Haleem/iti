
import {fireEvent, render , screen} from "@testing-library/react";

import "@testing-library/jest-dom";

import React from "react";
import ButtonToggle from "../componenets/ButtonToggel";

test("Button the initial state is OFF.",()=>{
 render(<ButtonToggle/>)
 expect(screen.getByText("OFF")).toBeInTheDocument()
})

test("click on button toggels state between ON and OFF",()=>{
    render(<ButtonToggle/>)

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText("ON")).toBeInTheDocument() ;

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText("OFF")).toBeInTheDocument() ;
    

})
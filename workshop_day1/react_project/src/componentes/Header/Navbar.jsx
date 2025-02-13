import React, { useContext, useState } from "react";
//import ThemeContext from "../../contexts/ThemeContext";
import {  NavLink } from "react-router-dom";
import routes from "./routes";

const Navbar = () => {
    return (
        <ul>
            {routes.map((route) => (
            <li key={route.href}>
                <NavLink
                    to={route.href}
                    className={({ isActive }) => isActive && "text-primary"}
                >
                    {route.label}
                </NavLink>
            </li>
            ))}
        </ul>
    );
};

export default memo(Navbar);
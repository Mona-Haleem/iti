import React, { memo } from "react";
import {  NavLink } from "react-router-dom";
import routes from "./routes.js";

const Navbar = () => {
    return (
        <ul className="m-0">
            {routes.map((route) => (
            <li key={route.href} >
                <NavLink
                    to={route.href}
                    className={({ isActive }) => isActive ? "text-light bg-secondary link" : "text-secondary link"}
                >
                    {route.label}
                </NavLink>
            </li>
            ))}
        </ul>
    );
};

export default memo(Navbar);
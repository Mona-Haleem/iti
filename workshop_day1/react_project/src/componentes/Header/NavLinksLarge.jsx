import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "./routes.js";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  Tab, Tabs } from "@mui/material";



const NavLinksLarge = () => {
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   
    return <Tabs value={value} onChange={handleChange} centered >
            {routes.map((route) => (
            <Tab
                key={route.label}
                className="p-0"
                label={
                <NavLink to={route.href}>
                    {route.label === "Cart" && <ShoppingCartIcon sx={{ height: "18px" }} />}
                    {route.label}
                </NavLink>
                }
            />)
            )
        }
        </Tabs>
};

export default memo(NavLinksLarge);
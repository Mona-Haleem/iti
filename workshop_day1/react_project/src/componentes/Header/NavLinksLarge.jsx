import React, { memo, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import routes from "./routes";
import {  Tab, Tabs } from "@mui/material";



const NavLinksLarge = () => {
    const [value, setValue] = useState(0);
    const {pathname} = useLocation()
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(()=>{
        const index = routes.findIndex((obj)=> obj.href == pathname)
        setValue(index !== -1 ?index :1)
    },[pathname])
   
    return <Tabs value={value} onChange={handleChange} centered >
            {routes.map((route) => (
            <Tab
                key={route.href}
                className="p-0"
                sx={{minWidth:"20px",fontSize:"12px"}}
                label={
                <NavLink to={route.href}>
                    {route.label}
                </NavLink>
                }
            />)
            )
        }
        </Tabs>
};

export default memo(NavLinksLarge);
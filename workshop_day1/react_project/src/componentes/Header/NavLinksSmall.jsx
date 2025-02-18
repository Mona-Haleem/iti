import React, { memo, useState } from "react";
import {  NavLink } from "react-router-dom";
import routes from "./routes.js";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer, ListItem,List, ListItemText} from "@mui/material";



const NavLinksSmall = ({handleDrawerToggle, menuOpen}) => {
    return <Drawer anchor="right" open={menuOpen} onClose={handleDrawerToggle} >
            <List>
            {routes.map((route) => (
                <ListItem button key={route.label} onClick={handleDrawerToggle}>
                <NavLink to={route.href}>
                    {route.label === "Cart" && <ShoppingCartIcon sx={{ height: "18px" }} />}
                    {route.label}
                </NavLink>
                </ListItem>
            ))}
            </List>
        </Drawer>

};

export default memo(NavLinksSmall);
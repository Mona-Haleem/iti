import React, { memo, useState } from "react";
import {  NavLink } from "react-router-dom";
import routes from "./routes";
import { Drawer, ListItem,List, ListItemText} from "@mui/material";



const NavLinksSmall = ({handleDrawerToggle, menuOpen}) => {
    return <Drawer anchor="right" open={menuOpen} onClose={handleDrawerToggle} >
            <List>
            {routes.map((route) => (
                <ListItem button key={route.href} onClick={handleDrawerToggle}>
                <NavLink to={route.href}>
                    {route.label}
                </NavLink>
                </ListItem>
            ))}
            </List>
        </Drawer>

};

export default memo(NavLinksSmall);
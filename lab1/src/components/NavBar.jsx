import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { common } from "@mui/material/colors";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar >
        <Box display={"flex"} flexGrow={1} gap={2} alignItems={"center"}>
          <Typography
            variant="h5"
            component="h1"
            sx={{  fontWeight: "bold" }}
          >
            codementor
          </Typography>
            <NavItem label={"Mentorship"}/>
            <NavItem label={"Expert help"}/>
            <NavItem label={"Freelancing"}/>
            <NavItem label={"more"}/>
        </Box>
          
          <Button color={common.black} sx={{ textTransform: "none" }}>
            Become a mentor
          </Button>
          <Button color={common.black} sx={{ textTransform: "none" }}>
            Log in
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{ textTransform: "none", backgroundColor: "#000" }}
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

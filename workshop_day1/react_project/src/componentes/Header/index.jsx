import {memo, useState} from "react";
import ContextToggler from "./ContextToggler";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "./UserIcon";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import NavLinksSmall from "./NavLinksSmall.jsx";
import NavLinksLarge from "./NavLinksLarge.jsx";


const Header = () => {

  const [menuOpen, setmenuOpen] = useState(false);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  
  
  const handleDrawerToggle = () => {
      setmenuOpen((isOpen) => !isOpen);
    };


    return (
      <AppBar position="static" >
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Typography variant="h6" sx={{marginRight: 2}}>E-Commerce</Typography>
          {isSmall?<NavLinksSmall handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen}/>:<NavLinksLarge/>}
          <div className="flex">
            <UserIcon/>
            <ContextToggler/>
              { isSmall && (
                  <IconButton onClick={handleDrawerToggle}  color="inherit">
                      <MenuIcon />
                  </IconButton>
              )
            }
          </div>
          
        </Toolbar>
      </AppBar>  
  );
};


export default memo(Header);




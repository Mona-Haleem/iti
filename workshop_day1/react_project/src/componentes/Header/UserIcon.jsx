import {memo, useContext, useState, } from "react";
import {  IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const UserIcon = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {logout,isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogout = () => {
        setAnchorEl(null);
        logout()
    };

    const navToProfile = ()=>{
        setAnchorEl(null);
        navigate("/account")
    }

    return (
     <div>
        <IconButton 
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(e)=>isAuthenticated?setAnchorEl(e.currentTarget):navigate('/login')}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        {isAuthenticated && <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                '& .MuiPaper-root': {
                  px: 2, 
                }
              }}
           
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >       
       
            <MenuItem  onClick={navToProfile}>Profile</MenuItem>
            <MenuItem  onClick={handleLogout}>Logout</MenuItem>
           
        </Menu>}
    </div>
  );
};

export default memo(UserIcon);
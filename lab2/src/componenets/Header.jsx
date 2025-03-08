import React from 'react'
import {
    AppBar,
    Box,
    Breadcrumbs,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { common, grey } from "@mui/material/colors";
  
  import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
  import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
  import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
  import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
  import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
  import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
  export default function header() {
  return (
    <AppBar component={"header"} position="static" sx={{paddingX:3}} color="default">
          <Toolbar disableGutters >
            <Typography variant='h3' component={"h1"} flexGrow={1}>EQ3</Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <LocationOnOutlinedIcon sx={{ mr: 0.5 }} />
                <InfoOutlinedIcon sx={{ mr: 0.5 }} />
                <FavoriteBorderOutlinedIcon sx={{ mr: 0.5 }} />
                <Stack flexDirection={"row"} alignItems={"center"}>
                    <PersonOutlineOutlinedIcon sx={{ mr: 0.5 }}/>
                    <Typography variant='body2'>Join/Login to EQ3</Typography> 
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"}>
                    <LanguageOutlinedIcon sx={{ mr: 0.5 }}  />
                    <Typography variant='body2'>EN / CAD</Typography> 
                </Stack>
            </Breadcrumbs>
            <Button variant='outlined' sx={{marginLeft: 2,color:'#999'}} color='black' >
                <ShoppingCartOutlinedIcon/>
                <Typography variant='body2'>Cart (0)</Typography>
                </Button>    
  
          </Toolbar>
      </AppBar>
  )
}


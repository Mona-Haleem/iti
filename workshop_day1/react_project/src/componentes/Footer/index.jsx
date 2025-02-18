import { memo, useContext } from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles"; 


const Footer = () => {
  const theme = useTheme(); 
  const currStyle = {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  };

  return (
    <footer style={currStyle}>
      <Box sx={currStyle}> 
              <p>&copy; 2025 Mansoura react demo. All rights reserved</p>
              <div>
                  <IconButton color="inherit">
                    <FacebookRoundedIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <GitHubIcon />
                  </IconButton>  
              </div>     

        </Box>

    </footer>
  );
};

export default Footer;


    

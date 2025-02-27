import { memo, useContext } from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles"; 
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme(); 
  const currStyle = {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  };

  return (
    <footer style={currStyle}>
      <Box sx={currStyle}> 
              
              <Box sx={{textAlign:"center"}}>
                <Typography  variant="p" sx={{display:"block"}}>&copy; 2025 Mansoura react demo.</Typography>
                <Typography variant="p">All rights reserved</Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
              }}>
                <Typography variant="h6" gutterBottom>
                    Follow Us
                </Typography>
                <Box>
                    <IconButton href="#" color="inherit">
                        <FacebookRoundedIcon />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                        <YouTubeIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'start', 
            }}>
              
                <Typography variant="body2" >
                    <EmailIcon sx={{ mr: 1 }} /> contact@example.com
                </Typography>
                <Typography variant="body2" sx={{mt:1}}>
                    <PhoneIcon sx={{ mr: 1 }} /> +123 456 7890
                </Typography>
                <Typography variant="body2" sx={{mt:1}}>
                    <LocationOnIcon sx={{ mr: 1 }} /> Egypt, Mansoura 
                </Typography>
            </Box>     

        </Box>

    </footer>
  );
};

export default Footer;


    

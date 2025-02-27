import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutSection = () => {
    return (
        <>
            <Box sx={{ m: 4 }}>
                <Typography variant="h4" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome to Our Company! We are dedicated to providing the best services to our customers.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our mission is to innovate and lead in the industry, ensuring customer satisfaction and excellence.
                </Typography>
            </Box>
        </>
    );
};

export default AboutSection;

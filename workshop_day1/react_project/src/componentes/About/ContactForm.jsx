import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';



const ContactForm = () => {
    const {userData} = useContext(AuthContext);
    const [formData, setFormData] = useState({});

    useEffect(()=>{
        setFormData({
            ...formData,
            name: `${userData?.firstName} ${userData?.lastName}` || '',
            email: userData?.email || '',
            message: ''
            
        });
    },[userData])
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.message.trim() === '') {
            alert('Message is required');
            return;
        }
        console.log('Contact Form Data:', formData);
        alert('Message Sent!');
        setFormData({ ...formData, message: '' });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 4 }}>
            <Typography variant="h5" gutterBottom>
                Contact Us
            </Typography>
            <TextField
                name="name"
                label="Name"
                value={formData.name}
                focused={formData.name !== ''} 
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                focused={formData.email !== ''} 
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                focused={formData.message !== ''} 
                multiline
                rows={4}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <Button variant="contained" type="submit">
                Send Message
            </Button>
        </Box>
    );
};

export default ContactForm;

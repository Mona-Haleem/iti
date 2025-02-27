import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import { serverInstance } from '../../utils/axiosInstance';
import { profileSchema } from '../../utils/profileValidation';

const schema = profileSchema
function RegisterFrom({onSwitch}) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const onSubmit = async (data) => {
        console.log('called')
        try {
            const { confirmPassword, ...userData } = data;
            const token = Math.random().toString(36).substring(2);
            await serverInstance.post('/users', {...userData,token});
            localStorage.setItem('token',token)
            onSwitch({ email: data.email });
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Failed to register. Please try again.');
        }       
    };

  return (
    <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}
    >
        <Typography variant="h4" gutterBottom>
            Register
        </Typography>

        <Box display={'flex'} gap={2}>
            <TextField
                label="First Name"
                fullWidth
                {...register('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
            />
        
            <TextField
                label="Last Name"
                fullWidth
                {...register('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
            />
        </Box>
                
        <TextField
            label="Username"
            fullWidth
            margin="normal"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
        />

        <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
        />

        <Box display={'flex'} gap={2} marginY={2}>
            <TextField
                label="Password"
                type="password"
                fullWidth
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
        
            <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                {...register('confirmPassword')}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
            />
        </Box>

        <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ my: 2 }}>
            Register
        </Button>

        <Typography variant='body2' color='textSecondary'>
            Already have an account?{' '}
            <Typography variant='span' color='primary' sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={onSwitch}>
                Login here
            </Typography>
        </Typography>
    </Box>
    );
}

export default RegisterFrom
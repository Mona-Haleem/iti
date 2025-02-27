import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { serverInstance } from '../../utils/axiosInstance';
import { AuthContext } from '../../contexts/AuthContext';

function LoginForm({onSwitch , defaultValues }) {
    const { register, handleSubmit, formState: { errors } ,setValue } = useForm();
    const [error, setLoginError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onSubmit = async (data) => {
        try {
            const response = await serverInstance.get('/users', {
                params: {
                    email: data.email,
                    password: data.password
                }
            });

            if (response.data.length > 0){
                const {password, ...userData} = response.data[0];
                localStorage.setItem('token',userData.token)
                login(userData);
                navigate('/', { replace: true }); 
            }else
                setLoginError('Invalid email or password');
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('An error occurred. Please try again.');
        }
    };

    useEffect(()=>{
        if (defaultValues){
            setValue('email',defaultValues.email);
        }
    },[])

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>

            <TextField
                label="Email"
                fullWidth
                margin="normal"
                {...register('email', { required: 'Email is required' })}
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...register('password', { required: 'Password is required' })}
                error={!!errors.password}
                helperText={errors.password?.message}
            />

            {error && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}

            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ my: 2 }}>
                Login
            </Button>

            <Typography variant='body2' color='textSecondary'>
                Don't have an account?{' '}
                <Typography variant='span' color='primary' sx={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={onSwitch}>
                    Register here
                </Typography>
            </Typography>
        </Box>
    );
}

export default LoginForm
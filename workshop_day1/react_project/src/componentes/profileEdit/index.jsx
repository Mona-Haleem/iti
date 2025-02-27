import React, { useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';
import { profileSchema } from '../../utils/profileValidation';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SaveIcon from '@mui/icons-material/Save';
import {  serverInstance } from '../../utils/axiosInstance';



const schema = profileSchema.omit(['password', 'confirmPassword']);
export default function ProfileEdit({handleToggle}) {
    const {userData,setUserData} = useContext(AuthContext)
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: userData,
        mode: 'onBlur'
    });
    const onSubmit = async (data) => {
        console.log('called')
        try {
            await serverInstance.patch(`/users/${userData.id}`, data);
            setUserData((prev)=>({...prev,...data}));
            handleToggle()
        } catch (error) {
            console.error('update failed:', error);
        }       
    };

    return (   
            <Box sx={{marginLeft:"50px"}} 
            component="form"
            onSubmit={handleSubmit(onSubmit)}>
                
                {Object.keys(userData).map((field) => {
                            if (field === 'id' ||field === 'profileImage') return null;
                            return (
                                <Controller
                                    key={field}
                                    name={field}
                                    control={control}
                                    render={({ field: inputProps }) => (
                                        <TextField
                                            {...inputProps}
                                            fullWidth
                                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                                            error={!!errors[field]}
                                            helperText={errors[field]?.message}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />
                            );
                        })}
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<SaveIcon />}
                    type="submit"
                    sx={{ mt: 2 }}
                >
                    Save
                </Button>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={handleToggle}
                    sx={{ mt: 2, ml: 2 }}
                >
                    Cancel
                </Button>
          </Box>
    );
}
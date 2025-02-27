import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters')
        .required('Username is required'),
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[*_\-$&]/, 'Password must contain at least one special character (*, _, -, $, &)')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    phoneNumber: Yup.string()
        .matches(/^(0[1][0125]\d{8})?$/, 'Phone number must be a valid Egyptian number with country code')     
});
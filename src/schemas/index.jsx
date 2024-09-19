import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters long')
        .max(25, 'Name cannot exceed 25 characters')
        .required('Please enter your name'),
    email: Yup.string()
        .email('Please enter a valid email like example@gmail.com')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
});

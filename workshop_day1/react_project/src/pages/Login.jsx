import React, { useState } from 'react';
import LoginForm from '../componentes/LoginForm';
import RegisterForm from '../componentes/RegisterForm';


export default function Login() {
    const [currForm,setCurrForm] = useState('login');
    const [loginData,setLoginData] = useState({});
    
    const toggleForm = (data) => {
        if(data)
            setLoginData(data);
        setCurrForm(prevType => (prevType === 'login' ? 'register' : 'login'));
    };

    return (
        <div>
            {currForm === 'login' ? (
                <LoginForm onSwitch={toggleForm} defaultValues={loginData}/>
            ) : (
                <RegisterForm onSwitch={toggleForm} />
            )}
        </div>
    );
}







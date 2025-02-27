import React, { createContext, useContext, useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router-dom';
import { serverInstance } from '../utils/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    const login = (data) => {
        setIsAuthenticated(true);
        setUserData(data) 
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
    };

    useEffect(()=>{
        const getCurrentUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return
            };
    
            const { data } = await serverInstance.get('/users', {
                params: {
                    token:token
                }
            });

            if(data){
                const {password ,...user} = data[0]
                login(user);
                setLoading(false);
            }
        
            return null;
        }
        getCurrentUser()
    },[])

    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout,userData,setUserData,loading }}>
            {children}
        </AuthContext.Provider>
    );
};

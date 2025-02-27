import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

      
    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" replace />;
    }

    return loading ? <div>Loading ...</div>:children
    
};

export default ProtectedRoute;

import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    
     const { user, loading } = useContext(AuthContext);

  
    const location = useLocation();
    if (loading) {
    return <div className="p-5 text-center">Loading...</div>;
  }
    
    
    
    if (!user) {
        return <Navigate to='/register' state={location.pathname}></Navigate>
    }
    
    return  children
        
    
};

export default PrivateRoute;
import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';


const AdminRoutes = ({children}) => {
    const {loading}=useAuth()
    const {role,roleLoading}=useRole()
    if (loading || roleLoading) {
        return <p>Loading.........</p>
    }

    if (role !== 'admin') { 
        return <p>Access is forbidden</p>
    }

    return children
};

export default AdminRoutes;
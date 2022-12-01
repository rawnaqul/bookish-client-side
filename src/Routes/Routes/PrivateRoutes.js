import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider/Authprovider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        // return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoutes;
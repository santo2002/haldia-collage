import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    console.log(user)
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;



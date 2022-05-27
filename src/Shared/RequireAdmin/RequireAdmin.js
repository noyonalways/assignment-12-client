import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';


import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if (loading || adminLoading) {
        return <LoadingRipple/>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;
import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const lacation = useLocation();
    console.log(location.pathname);

    if(loading){
        return <p>Loading Please Wait</p>
    }

    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/Login'></Navigate>
    
};

export default PrivateRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    // if use then give children else go to log in
    // remain loading still data fatching,,if user come then show it or goto log in
if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}
    if(user && user?.email){
        return children
    }
    return  <Navigate state={location.pathname} to="/login">Login</Navigate>
     
    
};

export default PrivateRoute;
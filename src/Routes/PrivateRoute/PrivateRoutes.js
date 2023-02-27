import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/contexts/AuthProvide/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
    <Loading></Loading>
    }
    
    if (user) {
      return children;
    }
    
    return <Navigate to="/SignIn" state={{ from: location }} replace></Navigate>;
  };
  ;

export default PrivateRoutes;
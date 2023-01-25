import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context'

export const PrivateRoutes = ({children}) => {

  const {authState:{logged}} = useContext(AuthContext);

  return (logged)
    ? children
    : <Navigate to="login"/>
}

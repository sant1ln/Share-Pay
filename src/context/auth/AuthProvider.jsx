import React, { useReducer } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { types } from '../../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


/* const initialState = {
  logged: false,
  role: null,
  premium: false,
  username: null,
} */

const init = () => {
  const user  = localStorage.getItem('user');
  console.log(user)
  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer,{}, init);
  const navigate = useNavigate();

  const login = (user) => {
    
    const action = {
      type: types.login,
      payload: user
    }
    dispatch(action)
    localStorage.setItem('user',user)
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout
    }
    dispatch(action)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{
      authState,
      login: login,
      logout: logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

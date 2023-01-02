import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


const initialState = {
  logged: false,
  role: null,
  premium: false,
  username: null,
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer,initialState);

  const login = (username) => {
    
    const action = {
      type: types.login,
      payload: username
    }
    
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      authState,
      login: login
    }}>
      {children}
    </AuthContext.Provider>
  )
}

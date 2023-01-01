import React from 'react'
import { useAuth } from '../auth';

export const Profile = () => {

  const auth = useAuth();

  return (
    <>
      <div>Profile</div>
      <p>Bienvenido!, {auth.user?.username}</p>
    </>
  )
}

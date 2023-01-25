import React from 'react'
import { AuthContext } from '../context/AuthContext';
import './styles/usercard.css'

export const UserCard = () => {

  const {authState:{user}} = React.useContext(AuthContext);

  return (
    <section className='user-card'>
      <h2>
        Hola de nuevo, <br /> {user}
      </h2>
      <p>Tarjetas principales</p>

      
    </section>
  )
}

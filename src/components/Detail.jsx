import React from 'react'
import { AuthContext } from '../context/AuthContext';
import './styles/detail.css'

export const Detail = () => {

  
  const {authState:{user}} = React.useContext(AuthContext);

  return (
    <section className='detail-of-card'>      
      <h2>
        Hola de nuevo, <br /> {user}
      </h2>
      <p className='no-card-selected'>Seleciona una tarjeta para ver mas detalles</p>
    </section>
  )
}

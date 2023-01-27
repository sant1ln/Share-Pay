import React from 'react'
import { AuthContext } from '../context/AuthContext';
import './styles/detail.css'

export const Detail = () => {

  
  const {authState:{user}} = React.useContext(AuthContext);

  return (
    <section className='detail-of-card'>      
      {/* <h2>
        Hola de nuevo, <br /> {user}
      </h2>
      <p className='no-card-selected'>Seleciona una tarjeta para ver mas detalles</p> */}


      <form action="">

        <label htmlFor="card-holder">
          Nombre de usario
        </label>
        <input type="text" placeholder='Jhon Doe' id="card-holder" />


        <label htmlFor="card-number">
          Numero de tarjeta
        </label>
        <input type="text" placeholder='0000 0000 0000 0000' id="card-number"/>

        <div className='card-expiration'>
          <label htmlFor="expiration-date">MM/YY</label>
          <input type="text" placeholder='MM' id="expiration-date"/>
          <input type="text" placeholder='YY' />
        </div>

        <label htmlFor="card-cvc">
          CVC
        </label>
        <input type="text" name="" id="card-cvc" />

        

      </form>

    </section>
  )
}

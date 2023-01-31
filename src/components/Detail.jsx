import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/auth/AuthContext';
import premium_logo from '../assets/icons/card_icon_1.svg'
import './styles/detail.css'
import './styles/card.css'
import { CardContext } from '../context/cards/CardContext';

export const Detail = () => {

  const { cardState: { selectedCard } } = useContext(CardContext);
  const { type, number, expirationMonth, expirationYear } = selectedCard;
  const { authState: { user } } = useContext(AuthContext);
  const [form, setForm] = useState({
    number: number,
    month: expirationMonth,
    year: expirationYear,
  })

  return (
    <section className='detail-of-card'>
      {/* <h2>
        Hola de nuevo, <br /> {user}
      </h2>
      <p className='no-card-selected'>Seleciona una tarjeta para ver mas detalles</p> */}

      <div className='card-edit'>
        <div className='card premium' id={type}>
          <img src={premium_logo} alt="logo_card" />
          <span className='card-number'>{form.number}</span>
          <div className='card-user'>
            <p>{user}</p>
            <p>{form.month}/{form.year}</p>
          </div>
        </div>
      </div>

      <form action="">

        <label htmlFor="card-holder">
          Nombre de usario
        </label>
        <input type="text" value={user} placeholder='Jhon Doe' id="card-holder" />


        <label htmlFor="card-number">
          Numero de tarjeta
        </label>
        <input 
          type="text" 
          value={form.number} 
          onChange={(e) => setForm({...form, number: e.target.value})}
          placeholder='0000 0000 0000 0000' 
          id="card-number"
          />

        <div className='card-expiration'>
          <label htmlFor="expiration-date">MM/YY</label>
          <input type="text" value={form.month} placeholder='MM' id="expiration-date" />
          <input type="text" value={form.year} placeholder='YY' />
        </div>

        <label htmlFor="card-cvc">
          CVC
        </label>
        <input type="text" name="" id="card-cvc" />

      </form>

    </section>
  )
}

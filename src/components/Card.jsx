import React from 'react'
import premium_logo from '../assets/icons/card_icon_1.svg'
import gold_logo from '../assets/icons/card_icon_2.svg'
import platinum_logo from '../assets/icons/card_icon_3.svg'
import { AuthContext } from '../context/auth/AuthContext';
import './styles/card.css'

export const Card = ({ type, number, expiration }) => {

  const { authState: { user } } = React.useContext(AuthContext);

  return (
    <>
      <div className='card premium' id={type}>
        <img src={premium_logo} alt="logo_card" />
        <span className='card-number'>{number}</span>
        <div className='card-user'>
          <p>{user}</p>
          <p>{expiration}</p>
        </div>
      </div>
    </>
  )
}

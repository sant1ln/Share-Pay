import React from 'react'
import premium_logo from '../assets/icons/card_icon_1.svg'
import gold_logo from '../assets/icons/card_icon_2.svg'
import platinum_logo from '../assets/icons/card_icon_3.svg'
import { AuthContext } from '../context/auth/AuthContext';
import { CardContext } from '../context/cards/CardContext';
import './styles/card.css'

export const Card = ({ type, number, expiration }) => {

  const { authState: { user } } = React.useContext(AuthContext);
  const { dispatch } = React.useContext(CardContext)

  const setCardToEdit = () =>{
    /* dispatch({type, number, expiration}) */
    console.log('To complete...')
  }

  return (
    <>
      <div className='card premium' id={type}>
        {renderIcon(type)}
        <span className='card-number'>{number}</span>
        <div className='card-user'>
          <p>{user}</p>
          <p>{expiration}</p>
        </div>
      </div>
    </>
  )
}


const renderIcon = (type) => {
  switch (type) {
    case 'premium':
      return (<img src={premium_logo} alt="premium_logo_card" />)
    case 'gold':
      return (<img src={gold_logo} alt="gold_logo_card" />)
    case 'platinum':
      return (<img src={platinum_logo} alt="platinum_logo_card" />)
    default:
      return (<img src={premium_logo} alt="premium_logo_card" />)
  }
}
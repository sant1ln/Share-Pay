import React, { useContext } from 'react'
import { CardContext } from '../context/cards/CardContext';
import { Card } from './Card';
import './styles/usercard.css'

export const UserCard = () => {

  const { cardState: { cards } } = useContext(CardContext);

  console.log(cards)
  return (
    <section className='user-card'>
      <p>Tus Tarjetas principales</p>
      {
        cards.map(({ type, number, expiration }) => (
          <Card 
            key={number} 
            number={number} 
            expiration={expiration}
            type={type}
            />
        ))
      }
    </section>
  )
}

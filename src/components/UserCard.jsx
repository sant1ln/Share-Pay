import React from 'react'
import { Card } from './Card';
import './styles/usercard.css'

export const UserCard = () => {
  return (
    <section className='user-card'>
      <p>Tus Tarjetas principales</p>
      <Card />      
    </section>
  )
}

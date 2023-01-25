import React from 'react'
import { Detail } from '../components/Detail'
import { UserCard } from '../components/UserCard'

import './styles/home.css'

export const Home = () => {
  return (
    <main className='main-app'>
      <UserCard />
      <Detail />
    </main>
  )
}

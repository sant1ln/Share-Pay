import React from 'react'
import { Detail } from '../components/Detail'
import { UserCard } from '../components/UserCard'
import { AuthContext } from '../context/AuthContext'

import './styles/home.css'

export const Home = () => {

  const {authState:{user}} = React.useContext(AuthContext);

  return (
    <main className='main-app'>
      <UserCard/>
      <Detail/>
    </main>
  )
}

import React, { useContext } from 'react'
import { Menu } from './Menu'
import './styles/header.css'
import logoApp from '../assets/icons/logoapp-white.svg';
import dummyuser from '../assets/icons/dummyprofile-white.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Header = () => {

  const {authState:{user}} = useContext(AuthContext);
  /* console.log(authState) */
  return (
    <header>
      <section className='header-title'>
        <img src={logoApp} alt="Logo SharePay" width="30" height="30" />
        <h1>Share Pay</h1>
      </section>
      <Menu />
      <section className='header-user'>
        <span>Hola, {user}</span>
        <img src={dummyuser} alt="Icono de usuario por defecto" width="20" height="20" />
        <div className='header-popup'>
          <Link to="/login">Cerrar Sesión</Link>
        </div>
      </section>

    </header>
  )
}

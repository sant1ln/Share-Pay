import React from 'react'
import { NavLink } from 'react-router-dom';
import { routes } from '../core/routes';
import './styles/menu.css';

export const Menu = () => {
  return (
    <nav>
      <ul className='nav-list'>
        {
          routes.map(({ to: url, text }) => (
            <li 
              className='nav-item'
              key={text}>
              <NavLink
                to={url}
                className={({ isActive }) =>
                  isActive ? 'current-link' : 'normal-link'
                }
              >{text}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

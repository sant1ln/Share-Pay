import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth';
import { routes } from '../core/routes';
import './styles/menu.css';

export const Menu = () => {

  const auth = useAuth()

  return (
    <nav>
      <ul className='nav-list'>
        {
          routes.map(({ to: url, text, private:privateRoute}) => {
        /*     if(privateRoute && !auth.user) return null */
            
            return (
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
            )})
        }
      </ul>
    </nav>
  )
}

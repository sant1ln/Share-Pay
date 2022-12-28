import React from 'react'
import { NavLink } from 'react-router-dom';

const routes = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/dashboard',
    text: 'dashboard'
  },
  {
    to: '/profile',
    text: 'profile'
  },
]


export const Menu = () => {
  return (
    <nav>
      <ul>
        {
          routes.map(({ to: url, text }) => (
            <li key={text}>
              <NavLink
                to={url}
                style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>{text}</NavLink>
            </li>
          ))
        }
        {/* <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >dashboard</NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >Profile</NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

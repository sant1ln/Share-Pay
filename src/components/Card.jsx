import React from 'react'
import premium_logo from '../assets/icons/card_icon_1.svg'
import gold_logo from '../assets/icons/card_icon_2.svg'
import platinum_logo from '../assets/icons/card_icon_3.svg'
import { AuthContext } from '../context/AuthContext';
import './styles/card.css'

export const Card = () => {

  const { authState: { user } } = React.useContext(AuthContext);
  return (
    <>
      <div className='card premium'>
        <img src={premium_logo} alt="logo_card" />
        <span className='card-number'>4041 5913 0619 5075</span>
        <div className='card-user'>
          <p>{user}</p>
          <p>02/27</p>
        </div>
      </div>

      <div className='card gold'>
        <img src={gold_logo} alt="logo_card" />
        <span className='card-number'>4041 5913 0619 5075</span>
        <div className='card-user'>
          <p>{user}</p>
          <p>02/27</p>
        </div>
      </div>

      <div className='card platinum'>
        <img src={platinum_logo} alt="logo_card" />
        <span className='card-number'>4041 5913 0619 5075</span>
        <div className='card-user'>
          <p>{user}</p>
          <p>02/27</p>
        </div>
      </div>
    </>
  )
}

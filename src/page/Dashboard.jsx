import React from 'react'
import { Link } from 'react-router-dom'
import { dashboardData } from '../mock/dashboardData'

export const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      {
        dashboardData.map(item => (
          <Link to={`/dashboard/${item.slug}`} key={item.slug}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Link>
        ))
      }
    </>
  )
}

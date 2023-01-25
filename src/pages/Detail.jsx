import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dashboardData } from '../mock/dashboardData';

export const Detail = () => {

  const navigate = useNavigate();
  const { slug } = useParams();

  const detail = dashboardData.find(post => post.slug === slug);

  const getBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>{detail.title}</h2>
      <p>{detail.text}</p>
      <button onClick={getBack}>Regresar</button>
    </div>
  )
}

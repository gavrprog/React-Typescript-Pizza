import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Pizza from '../models/Pizza'

const PizzaPage = () => {
  const [currentPizza, setCurrentPizza] = useState<Pizza | null>(null)
  const {id} = useParams()

  return (
    <>
      <span className="heading">Your Pizza</span>
      <div className="pizza pizza-page">
        <img src={`/images/${currentPizza?.img}`} alt={currentPizza?.title}/>
        <h2>{currentPizza?.title}</h2>
        <span>{currentPizza?.price} ₴</span>
        <p>THE BEST CHOICE IN THE CITY</p>
      </div>
    </>
  )
}

export default PizzaPage
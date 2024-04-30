import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pizza from '../models/Pizza'

const PizzaPage = () => {
  const [currentPizza, setCurrentPizza] = useState<Pizza | null>(null)
  const {id} = useParams()
  console.log(currentPizza)
  useEffect(() => {
    const getLocalStorage = localStorage.getItem('pizzasList')

    if ( getLocalStorage && id ) {
      const getID = parseInt(id)
      setCurrentPizza(JSON.parse(getLocalStorage).find((el: Pizza) => el.id === getID))
    }
  }, [])

  return (
    <>
      <div><Link to="/">HOME</Link></div>
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
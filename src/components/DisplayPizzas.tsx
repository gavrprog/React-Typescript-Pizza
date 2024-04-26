import React, { FC } from 'react'
import SinglPizza from './SinglPizza'
import Pizza from '../models/Pizza'


interface DisplayPizzasProps {
  pizzasList: Pizza[]
  updatePizza: (editPizza: Pizza) => void
  deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {

  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <SinglPizza 
                  key={pizza.id} 
                  pizza={pizza} 
                  updatePizza={updatePizza}
                  deletePizza={deletePizza}
                />
      })}
    </div>
  )
}

export default DisplayPizzas
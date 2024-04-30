import React, { useState, useEffect } from 'react'
import AddPizzaForm from '../components/AddPizzaForm'
import DisplayPizzas from '../components/DisplayPizzas'
import Pizza from '../models/Pizza'


const HomePage = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([])

    useEffect(() => {
      const storageState = localStorage.getItem('pizzasList')
      if (storageState) {
        setPizzasList(JSON.parse(storageState))
      }
    }, [])

  const addPizza = (newPizza: Pizza) => {
    const addedPizzaList = [...pizzasList, newPizza]
    setPizzasList(addedPizzaList)
    localStorage.setItem('pizzasList', JSON.stringify(addedPizzaList))
  }

  const updatePizza = (editPizza: Pizza) => {
    const editPizzasList = pizzasList.map((pizza) => (pizza.id === editPizza.id ? editPizza : pizza))
    setPizzasList(editPizzasList)
    localStorage.setItem('pizzasList', JSON.stringify(editPizzasList))
  }

  const deletePizza = (id: Number) => {
    const newListMinusPizza = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newListMinusPizza)
    localStorage.setItem('pizzasList', JSON.stringify(newListMinusPizza))
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our Pizzeria</span>
        <AddPizzaForm addPizza={addPizza}/>
        <DisplayPizzas 
          pizzasList={pizzasList} 
          updatePizza={updatePizza} 
          deletePizza={deletePizza}
        />
      </div>
    </div>
  )
}

export default HomePage
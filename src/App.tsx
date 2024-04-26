import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm'
import DisplayPizzas from './components/DisplayPizzas'
import Pizza from './models/Pizza'
import './App.css';


const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }
  const updatePizza = (editPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => (pizza.id === editPizza.id ? editPizza : pizza)))
  }
  const deletePizza = (id: Number) => {
    const newListMinusPizza = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newListMinusPizza)
  }
  console.log(pizzasList)
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
  );
}

export default App;

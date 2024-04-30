import React, { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PizzaPage from './pages/PizzaPage'
import AddPizzaForm from './components/AddPizzaForm'
import DisplayPizzas from './components/DisplayPizzas'
import Pizza from './models/Pizza'
import './App.css';


const App: FC = () => {

  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/pizza/:id' element={<PizzaPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

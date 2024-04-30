import React, { FC, useState } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom'
import EditPizzaForm from './EditPizzaForm'
import Pizza from '../models/Pizza'


interface SinglPizzaProps {
  pizza: Pizza
  updatePizza: (editPizza: Pizza) => void
  deletePizza: (id: number) => void
}

const SinglPizza: FC<SinglPizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
    const [edit, setEdit] = useState<boolean>(false)

    // click on the edit icon. This toggle is responsible for dispaly the edit form or the product card
    const hadleToggleEdit = () => {
        setEdit(!edit)
    }
    const handleDelete = () => {
        deletePizza(pizza.id)
    }

    return (
    <div className="pizza">
        <img src={`./images/${pizza.img}`} alt={pizza.title} />
        <h2>
            <Link to={`/pizza/${pizza.id}`}>
                {pizza.title}
            </Link>
        </h2>
        <span>{pizza.price} ₴</span>
        <div className="pizza-controls">
            <AiFillEdit onClick={hadleToggleEdit}/>
            <AiFillDelete onClick={handleDelete}/>
        </div>
        {/* EditPizzaForm cover by itself the product card when "edit"== true */}
        {edit   ? <EditPizzaForm 
                    data={pizza} 
                    updatePizza={updatePizza} 
                    hadleToggleEdit={hadleToggleEdit}
                    /> 
                : null}
    </div>
    )
}

export default SinglPizza
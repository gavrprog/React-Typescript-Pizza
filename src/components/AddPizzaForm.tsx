import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Pizza from '../models/Pizza'
import NewPizza from '../models/NewPizza'
import './styles.css'

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initState = {
    title: '',
    price: '',
    img: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<NewPizza>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target
        setNewPizza({...newPizza, [name]: value})
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title, price, img} = newPizza
        if (title && price && img) {
            //addPizza({...newPizza, id: Date.now(), price: Number(price)})
            addPizza({
                title, 
                img, 
                id: Date.now(), 
                price: Number(price)
            })
            setNewPizza(initState)
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
            name="title"
            type="text"
            placeholder="name"
            value={newPizza.title}
            onChange={handleChange}
        />
        <input 
            name="price"
            type="text"
            placeholder="Price"
            value={newPizza.price}
            onChange={handleChange}
        />
        <input 
            name="img"
            type="text"
            placeholder="Picture"
            value={newPizza.img}
           onChange={handleChange}
        /> 
        <button type="submit">
            + Add to the menu
        </button>               
    </form>
    )
}

export default AddPizzaForm
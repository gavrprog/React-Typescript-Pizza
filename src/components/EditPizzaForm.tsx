import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Pizza from '../models/Pizza'
import './styles.css'

interface EditPizzaFormProps {
    data: Pizza
    updatePizza: (editPizza: Pizza) => void
    hadleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, hadleToggleEdit }) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target
        setEditPizza({...editPizza, [name]: value})
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title, price, img} = editPizza
        if (title && price && img) {
            updatePizza(editPizza)
            hadleToggleEdit() // call for only change "edit" in product card SinglPizza
        }
    }

    return (
    <form className="edit-form" onSubmit={handleSubmit}>
        <input 
            name="title"
            type="text"
            placeholder="name"
            value={editPizza.title}
            onChange={handleChange}
        />
        <input 
            name="price"
            type="text"
            placeholder="Price"
            value={editPizza.price}
            onChange={handleChange}
        />
        <input 
            name="img"
            type="text"
            placeholder="Picture"
            value={editPizza.img}
           onChange={handleChange}
        /> 
        <button type="submit">
            + Submit
        </button>               
    </form>
    )
}

export default EditPizzaForm
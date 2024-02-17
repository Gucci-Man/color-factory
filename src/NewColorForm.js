import React, {useState} from 'react';

const NewColorForm = ({ addColor }) => {
    const INITIAL_STATE = {
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        addColor({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Color: </label>
            <input 
                id='color'
                type='text'
                name='color'
                placeholder='Color Name'
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;
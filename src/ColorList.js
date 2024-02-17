import React, { useState }from 'react';
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import NewColorForm from './NewColorForm';

function ColorList() {
    const INITIAL_STATE = [];

    const [colors, setColor] = useState(INITIAL_STATE);
    const addColor = (newColor) => {
        setColor(colors => [...colors, {...newColor, id: uuid() }])
    }
    return (
        <div>
            <h2>List of colors</h2>
            <NewColorForm addColor={addColor} />
        </div>
    );
}

export default ColorList;
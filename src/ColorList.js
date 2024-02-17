import React from 'react';
import { Link } from "react-router-dom";


function ColorList({ colors }) {
    
    return (
        <div>
            <Link to="/colors/new">Add a Color</Link>
            <div>
                {colors.map(({id, color}) => <Link key={id} to={`/colors/${color}`}>{color}</Link>)}
            </div>
        </div>
    );
}

export default ColorList;
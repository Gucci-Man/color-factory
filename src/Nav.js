import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className='Nav'>
            <Link to="/colorForm">
                Add a Color
            </Link>
        </nav>
    );
}

export default Nav;
import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./ColorDetail.css";

function ColorDetail({ color }) {
    if (!color) return <Navigate to="/colors" />

    return (
        <div>
            <h2>{color}</h2>
            <Link to="/colors">Go back</Link>
        </div>
    );
}

export default ColorDetail;
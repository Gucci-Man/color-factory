import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { v4 as uuid } from "uuid";

import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import FilterColorDetails from './FilterColorDetails';


function App() {
  const INITIAL_STATE = [];

  const [colors, setColor] = useState(INITIAL_STATE);
  const addColor = (newColor) => {
      setColor(colors => [...colors, {...newColor, id: uuid() }])
  }

  return (
    <div className="App">
     <h1>Color Factory</h1>
     <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} addColor={addColor}/>}/>
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<FilterColorDetails colors={colors}/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

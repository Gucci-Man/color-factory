import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ColorList from './ColorList';


// Array of color objs
let colors = []

function App() {
  return (
    <div className="App">
     <h1>Color Factory</h1>
     <BrowserRouter>
      <Routes>
        <Route path='/colors' element={<ColorList colors={colors} />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

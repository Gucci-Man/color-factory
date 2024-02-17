import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ColorList from './ColorList';


function App() {
  return (
    <div className="App">
     <h1>Color Factory</h1>
     <BrowserRouter>
      <Routes>
        <Route path='/colors' element={<ColorList />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

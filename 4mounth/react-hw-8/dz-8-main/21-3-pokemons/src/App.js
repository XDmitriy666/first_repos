import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import { MainPage } from "./pages/MainPage";
import { PokemonInfo } from "./pages/PokemonInfo";


const App = () =>  {
  const [ theme, setTheme ] = useState('dark');

  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }


  return (
    <div className={`app ${theme}`}>
      <button 
      onClick={toogleTheme}
      className="button">
        Change Theme
      </button>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<About />} />
       <Route path="/pokemon/:id" element={<PokemonInfo /> }  />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import AboutPokemon from './components/pages/AboutPokemon';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPokemon />} />
      </Routes>
    </div>
  );
}
export default App;

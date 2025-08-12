import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AnuncioGestaoBoa from "./pages/AnuncioGestaoBoa";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Privacy from "./pages/Privacy";
import Anuncios from "./pages/Propaganda";
import Sales from "./pages/Sales";
import Solution from "./pages/Solution";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/preco" element={<Price />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/vendas" element={<Sales />} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/anuncio-gestaoboa" element={<AnuncioGestaoBoa />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

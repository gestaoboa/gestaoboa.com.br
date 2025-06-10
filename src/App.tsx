import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Price from './pages/Price'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Solution from './pages/Solution'
import About from './pages/About'
import Sales from './pages/Sales'
import Anuncios from './pages/Propaganda'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/about" element={<About />} />
				<Route path="/preco" element={<Price />} />
				<Route path="/solution" element={<Solution />} />
				<Route path="/vendas" element={<Sales />} />
				<Route path="/anuncios" element={<Anuncios />} />				
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

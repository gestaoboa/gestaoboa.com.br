import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Splashscreen from './pages/Splashscreen'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Splashscreen />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

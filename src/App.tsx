import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Scheduling from './pages/Scheduling'
import ConfirmScheduling from './pages/ConfirmScheduling'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/scheduling/enterprise/:id" element={<Scheduling />} />
				<Route path="/confirm" element={<ConfirmScheduling />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

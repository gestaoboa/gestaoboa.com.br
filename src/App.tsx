import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Splashscreen from './pages/Splashscreen'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Splashscreen />} /> */}
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

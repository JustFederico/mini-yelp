import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </>
    )
}

export default App

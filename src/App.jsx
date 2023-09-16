import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import TopNav from './components/TopNav/TopNav'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/' element={<TopNav />} />

            </Routes>
        </>
    )
}

export default App

import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail.jsx'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/restaurant/:id' element={<RestaurantDetail />} />

            </Routes>
        </>
    )
}

export default App

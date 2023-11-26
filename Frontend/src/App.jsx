import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Bookings from './Pages/Bookings/Bookings'
import Support from './Pages/Support/Support'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/bookings' element={<Bookings />} />
                <Route path='/support' element={<Support />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/details/:id' element={<ProductDetails />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
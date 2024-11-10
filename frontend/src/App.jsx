import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    </BrowserRouter>
  )
}

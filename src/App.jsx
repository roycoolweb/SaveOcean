import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Landing from './components/Landing'
import Gallery from './components/Gallery'
import Register from './components/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/create" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './ui/LandingPage'
import Navbar from './components/Home/Navbar'
import AdminDashboard from './components/Admin/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
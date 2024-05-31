import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages.jsx/Hero'
import Brands from './components/Brands'
import Why from './pages.jsx/Why'
import Footer from './pages.jsx/Footer'
import GetStarted from './pages.jsx/GetStarted'
import SuccessStories from './pages.jsx/SuccessStories'
import Empower from './pages.jsx/Empower'

function App() {

  return (
    <div>
      <Hero  />
      <Brands />
      <Why />
      <Empower />
      <SuccessStories />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App

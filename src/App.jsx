import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { About } from './components/sections/About'
import './index.css'

function App() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <About />
    </div>
    
  )
}

export default App

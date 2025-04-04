import { NavBar } from './components/NavBar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import './index.css'

function App() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <main className='flex-grow'>
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
    
  )
}

export default App

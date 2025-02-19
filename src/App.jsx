import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import AnimatedEye from './components/AnimatedEye';

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <AnimatedEye />
    </div>
  )
}

export default App

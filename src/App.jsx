import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import LocomotiveScroll from 'locomotive-scroll'
import Landing from './components/Landing'
import Skills from './components/Skills'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#f1faee]'>
      <Navbar/>
      <Landing/>
      <Intro/>
      <Skills/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

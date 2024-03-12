import React from 'react'
import { useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Contact/>
      <Footer/>
      <Intro/>
      <Portfolio/>
      <Timeline/>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SideScroll from './components/SideScroll'
import Center from './components/Center'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SideScroll />
      <Center />
    </div>
  )
}

export default App
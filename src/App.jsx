import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import SideScroll from './components/SideScroll'
import Center from './components/Center'
import Level from './components/Level'
import Footer from './components/Footer'
import MarqueeBanner from './components/MarqueeBanner' 
import Login from './components/Login' 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
          <SideScroll />
          <Center />
          <Level />
          <Footer />
        </>
      } />
      
      <Route path="/login" element={
        <>
          <MarqueeBanner />
          <Login />
        </>
      } />
    </Routes>
  );
}

export default App;

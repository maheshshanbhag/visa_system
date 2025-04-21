import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

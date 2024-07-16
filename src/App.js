import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Hotel from './components/searchServices/hotel/hotel';
import Hotel1 from './components/searchServices/hotel/hotel1';
import Hotel2 from './components/searchServices/hotel/hotel2';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/hotel1' element={<Hotel1 />} />
          <Route path='/hotel2' element={<Hotel2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

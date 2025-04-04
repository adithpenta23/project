import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import Signup from './landing-page/signup/Signup';
import Aboutpage from './landing-page/about/Aboutpage';
import Pricingpage from './landing-page/pricing/Pricingpage';
import Supportpage from './landing-page/support/Supportpage';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/pricing" element={<Pricingpage/>}/>
    <Route path="/about" element={<Aboutpage/>}/>
    <Route path="/support" element={<Supportpage/>}/>
  </Routes>
    <Footer/>
  </BrowserRouter>
);




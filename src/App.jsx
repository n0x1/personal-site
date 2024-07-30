import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from '@/components/home/index';
import Art from '@/components/art/index';
import Portfolio from '@/components/portfolio/index'
import Contact from '@/components/contact/index'
import Fashion from  '@/components/fashion/index'
import NotFound from '@/components/NotFound';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/art' element={<Art />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
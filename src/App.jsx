import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

const Home = lazy(() => import('components/home/index.jsx'));
const Art = lazy(() => import('components/art/index.jsx'));
const Portfolio = lazy(() => import('components/portfolio/index.jsx'));
const Contact = lazy(() => import('components/contact/index.jsx'));
const Fashion = lazy(() => import('components/fashion/index.jsx'));
const NotFound = lazy(() => import('components/NotFound.jsx'));

const Main = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/art' element={<Art />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Main;

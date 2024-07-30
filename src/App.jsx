import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

const Home = lazy(() => import('./components/home'));
const Art = lazy(() => import('./components/art'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Contact = lazy(() => import('./components/contact'));
const Fashion = lazy(() => import('./components/fashion'));
const NotFound = lazy(() => import('./components/NotFound'));

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
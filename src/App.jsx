import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home/index.jsx';
import Bento from './components/bento.jsx'

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
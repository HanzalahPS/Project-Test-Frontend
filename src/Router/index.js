// src/components/Router.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';



function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default AppRouter;

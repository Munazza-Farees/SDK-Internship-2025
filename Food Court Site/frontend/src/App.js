import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import RegisterPage from './pages/RegisterPage';
import UploadMenuItemPage from './pages/UploadMenuItemPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/upload" element={<UploadMenuItemPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
  );
}

export default App;

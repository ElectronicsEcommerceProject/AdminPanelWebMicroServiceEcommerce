import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../core/auth/LoginPage';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AuthRoutes;

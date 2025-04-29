import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/jwtUtils';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');

  if (!token || isTokenExpired(token)) {
    alert('Сессия истекла. Пожалуйста, войдите снова.');
    localStorage.removeItem('access_token');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Если не авторизован — редиректим на /login
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Если авторизован — показываем защищённый контент
  return children;
};

export default ProtectedRoute;

/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { isTokenExpired } from '../utils/jwtUtils';

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('accessToken');
      if (token && !isTokenExpired(token)) {
        setIsAuthenticated(true);
        console.log('Token is valid, user is authenticated.');
      } else {
        setIsAuthenticated(false);
        console.log('Token is invalid or expired, user is not authenticated.');
      }
    };

    checkAuthStatus();

    // Optionally, you can add an interval to periodically check the token's validity
    const interval = setInterval(checkAuthStatus, 60000); // Check every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

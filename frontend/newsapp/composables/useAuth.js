import { useState } from '#app';

export const useAuth = () => {
  // Define state with default values
  const isAuthenticated = useState('isAuthenticated', () => false);
  const username = useState('username', () => null);

  // Use a method to initialize state from localStorage if on the client
  if (process.client) {
    isAuthenticated.value = !!localStorage.getItem('token');
    username.value = localStorage.getItem('username');
  }

  const login = (token, user) => {
    if (process.client) {
      localStorage.setItem('token', token);
      localStorage.setItem('username', user.username);
      isAuthenticated.value = true;
      username.value = user.username;
    }
  };

  const logout = () => {
    if (process.client) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      isAuthenticated.value = false;
      username.value = null;
    }
  };

  return {
    isAuthenticated,
    username,
    login,
    logout,
  };
};
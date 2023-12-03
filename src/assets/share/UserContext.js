import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, role) => {
    // Simulate the login process and store user data in the context
    if (role !== 'Admin' && role !== 'Student') {
      throw new Error('Invalid role');
    }

    // Example: Fetch user data from a server based on username and role
    // For simplicity, we're using static data here
    const userData = {
      username,
      role,
      data: role === 'Admin' ? { adminKey: 'adminValue' } : { studentKey: 'studentValue' },
    };

    // Store the token in localStorage
    const token = 'exampleToken'; // Replace with the actual token from your authentication process
    localStorage.setItem('authToken', token);

    // Set the user data in the context
    setUser(userData);
  };

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');

    // Clear user data when logging out
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

"use client"
import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext<any>({});

// Export the context and its provider
export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Define your context state and functions here
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const contextValue = {
    isLoading, 
    setIsLoading, 
    data, 
    setData,
    error,
    setError,
    currentUser,
    setCurrentUser
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
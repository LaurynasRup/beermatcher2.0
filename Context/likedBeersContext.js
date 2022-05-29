import { useState, useContext, createContext } from 'react';

const LikedBeersContext = createContext();

export const AppWrapperLikedBeers = ({ children }) => {
  const [likedBeers, setLikedBeers] = useState([]);
  const updateLikedBeers = arr => {
    setLikedBeers([...arr]);
  };

  return (
    <LikedBeersContext.Provider value={{ likedBeers, updateLikedBeers }}>
      {children}
    </LikedBeersContext.Provider>
  );
};

export const useLikedBeerContext = () => {
  return useContext(LikedBeersContext);
};

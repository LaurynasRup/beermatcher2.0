import { createContext, useContext, useState } from 'react';

const BeerContext = createContext();

export function AppWrapper({ children }) {
  let state = {
    value: 'test',
  };

  const [items, setItems] = useState([]);

  const updateItems = arr => {
    setItems([...arr]);
  };

  return (
    <BeerContext.Provider value={{ items, updateItems }}>
      {children}
    </BeerContext.Provider>
  );
}

export function useBeerContext() {
  return useContext(BeerContext);
}

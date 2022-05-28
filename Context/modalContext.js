import { useState, createContext, useContext } from 'react';

const ModalContext = createContext();

export function AppWrapperModal({ children }) {
  const [modal, setModal] = useState({
    display: false,
    item: null,
  });

  const toggleModal = beerObj => {
    setModal({
      ...modal,
      display: !modal.display,
      item: modal.item === null ? beerObj : null,
    });
  };

  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}

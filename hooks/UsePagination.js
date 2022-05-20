import { useState, useEffect } from 'react';

export const usePagination = (array, perPage) => {
  // State to store current items
  const [currentItems, setCurrentItems] = useState([]);
  // state to track pages
  const [currentPage, setCurrentPage] = useState(1);

  const setItemsArray = () => {
    setCurrentItems(
      array.slice((currentPage - 1) * perPage, perPage * currentPage)
    );
  };

  const nextPage = () => {
    if (currentPage === array.length / perPage) return;
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return { currentItems, setItemsArray, currentPage, nextPage, prevPage };
};

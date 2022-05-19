import { useState } from 'react';

export const usePagination = array => {
  const [displayArray, setDisplayArray] = useState([]);
  const [page, setPage] = useState(1);

  const setInitialProducts = array => {
    if (!array) {
      return;
    }

    if (array.length <= 4 && array.length > 0) {
      setDisplayArray(array);
    } else {
      setDisplayArray(array.slice(0, 4));
    }
  };

  return { displayArray, setInitialProducts };
};

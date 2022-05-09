import { useEffect } from 'react';
import { useBeerContext } from '../Context/beersContext';

const Carousel = () => {
  // Context
  const { items, updateItems } = useBeerContext();

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <>
      {items.map(item => (
        <p style={{ fontSize: '2rem' }}>{item.name}</p>
      ))}
    </>
  );
};

export default Carousel;

import { useEffect } from 'react';
import { useBeerContext } from '../Context/beersContext';
import styles from '../styles/Carousel.module.css';
import { truncateText } from '../functions/truncate';
import BeerCard from './BeerCard';

const Carousel = () => {
  // Context
  const { items, updateItems } = useBeerContext();

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <section className={styles.carousel}>
      {items.map(item => (
        <BeerCard
          name={item.name}
          image={item.image_url}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default Carousel;

import { useEffect } from 'react';
import { useBeerContext } from '../Context/beersContext';
import styles from '../styles/Carousel.module.css';
import { truncateText } from '../functions/truncate';
import BeerCard from './BeerCard';
import { usePagination } from '../hooks/UsePagination';

const Carousel = () => {
  // Context
  const { items, updateItems } = useBeerContext();

  const { displayArray, setInitialProducts } = usePagination(items);
  useEffect(() => {
    const displayBeers = setInitialProducts(items);
  }, [items]);

  return (
    <section className={styles.carousel}>
      <button
        type="button"
        title="Previous"
        className={styles.chevronPrev}
      ></button>
      {displayArray.map((item, idx) => (
        <BeerCard
          key={idx}
          name={item.name}
          image={item.image_url}
          description={item.description}
        />
      ))}
      <button
        type="button"
        title="Next"
        className={styles.chevronNext}
      ></button>
    </section>
  );
};

export default Carousel;

import { useEffect, useState } from 'react';
import { useBeerContext } from '../Context/beersContext';
import styles from '../styles/Carousel.module.css';
import BeerCard from './BeerCard';
import { usePagination } from '../hooks/UsePagination';

const PER_PAGE = 4;

const Carousel = () => {
  // Context
  const { items, updateItems } = useBeerContext();
  const [displayButtons, setDisplayButtons] = useState({
    prev: false,
    next: false,
  });

  const { currentItems, setItemsArray, currentPage, nextPage, prevPage } =
    usePagination(items, PER_PAGE);

  const displayPagButtons = () => {
    // Prev button
    if (currentPage === 1) {
      setDisplayButtons({ ...displayButtons, prev: false });
    } else {
      setDisplayButtons({ ...displayButtons, prev: true });
    }

    // Next Button
    if (items.length > 0) {
      if (currentPage < items.length / PER_PAGE) {
        setDisplayButtons({ ...displayButtons, next: true });
      } else {
        setDisplayButtons({ ...displayButtons, next: false });
      }
    }
  };

  useEffect(() => {
    setItemsArray();
    displayPagButtons();
  }, [items, currentPage]);

  return (
    <section className={styles.carousel}>
      {displayButtons.prev && (
        <button
          type="button"
          title="Previous"
          className={styles.chevronPrev}
          onClick={prevPage}
        ></button>
      )}
      {currentItems.map((item, idx) => (
        <BeerCard
          key={idx}
          name={item.name}
          image={item.image_url}
          description={item.description}
        />
      ))}
      {displayButtons.next && (
        <button
          type="button"
          title="Next"
          className={styles.chevronNext}
          onClick={nextPage}
        ></button>
      )}
    </section>
  );
};

export default Carousel;

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

  const {
    currentItems,
    setItemsArray,
    currentPage,
    nextPage,
    prevPage,
    setCurrentPage,
  } = usePagination(items, PER_PAGE);

  const displayPagButtons = () => {
    const pages = Math.ceil(items.length / PER_PAGE);

    if (items.length > 0 && items.length > PER_PAGE) {
      if (currentPage === 1) {
        setDisplayButtons({
          prev: false,
          next: true,
        });
      } else if (currentPage > 1 && currentPage !== pages) {
        setDisplayButtons({
          prev: true,
          next: true,
        });
      } else if (currentPage === pages) {
        setDisplayButtons({
          prev: true,
          next: false,
        });
      }
    } else {
      setDisplayButtons({
        prev: false,
        next: false,
      });
    }
  };
  // Update items & display buttons
  useEffect(() => {
    setItemsArray();
    displayPagButtons();
  }, [items, currentPage]);

  // Set page to 1 when new items are fetched
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return (
    <>
      <section
        className={`${styles.carousel} ${
          currentItems.length < PER_PAGE ? styles.carouselNarrow : ''
        }`}
      >
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
            id={item.id}
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
    </>
  );
};

export default Carousel;

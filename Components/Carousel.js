import { useEffect, useState } from 'react';
import { useBeerContext } from '../Context/beersContext';
import styles from '../styles/Carousel.module.css';
import BeerCard from './BeerCard';
import { usePagination } from '../hooks/UsePagination';
// Swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 3,
            },
            1120: {
              slidesPerView: 4,
            },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide>
              <BeerCard
                key={idx}
                name={item.name}
                image={item.image_url}
                description={item.description}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;

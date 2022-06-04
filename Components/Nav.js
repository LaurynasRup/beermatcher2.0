import { useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import { useLikedBeerContext } from '../Context/likedBeersContext';
import { useModalContext } from '../Context/modalContext';
import { truncateText } from '../functions/truncate.js';

const Nav = () => {
  const { likedBeers, updateLikedBeers } = useLikedBeerContext();
  const { toggleModal } = useModalContext();

  const handleLikedBeer = e => {
    const likedBeerId = e.target.closest('li').dataset.itemId;
    const beerObj = likedBeers.find(beer => beer.id === +likedBeerId);
    toggleModal(beerObj);
  };
  const handleDeleteLike = e => {
    e.stopPropagation();
    const likedBeerId = e.target.closest('li').dataset.itemId;
    const beerObj = likedBeers.find(beer => beer.id === +likedBeerId);

    const updatedLikedBeers = likedBeers.filter(beer => beer.id !== beerObj.id);

    updateLikedBeers(updatedLikedBeers);
    localStorage.setItem('likedBeers', JSON.stringify(updatedLikedBeers));
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <span className={styles.nav__logoText}>Brewdog</span>
      </div>
      {likedBeers.length > 0 && (
        <div className={styles.nav__likesCont}>
          <button
            className={styles.nav__likesBtn}
            aria-label="Liked Beers"
            title="Liked Beers"
          ></button>
          <ul className={styles.nav__likesList}>
            {likedBeers.map(beer => (
              <li
                className={styles.nav__likedBeer}
                onClick={handleLikedBeer}
                data-item-id={beer.id}
                key={beer.id}
              >
                <img
                  src={beer.image_url ? beer.image_url : '/bottle.png'}
                  alt={beer.name}
                />
                <p>{truncateText(beer.name, 25)}</p>
                <button
                  title="Delete Like"
                  className={styles.nav__likeRemove}
                  onClick={handleDeleteLike}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

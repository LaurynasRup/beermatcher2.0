import styles from '../styles/Nav.module.css';
import { useLikedBeerContext } from '../Context/likedBeersContext';
import { useEffect } from 'react';
import { truncateText } from '../functions/truncate.js';

const Nav = () => {
  const { likedBeers, updateLikedBeers } = useLikedBeerContext();

  useEffect(() => {
    console.log(likedBeers.length);
  }, [likedBeers]);
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
              <li className={styles.nav__likedBeer}>
                <img src={beer.image_url} alt={beer.name} />
                <p>{truncateText(beer.name, 20)}</p>
                <button
                  title="Delete Like"
                  className={styles.nav__likeRemove}
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

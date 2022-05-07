import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <span className={styles.nav__logoText}>Brewdog</span>
      </div>
      <button
        className={styles.nav__likes}
        aria-label="Liked Beers"
        title="Liked Beers"
      ></button>
    </nav>
  );
};

export default Nav;

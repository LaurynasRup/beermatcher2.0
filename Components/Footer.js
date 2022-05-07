import styles from '../styles/Footer.module.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  console.log(year);

  return (
    <footer className={styles.footer}>
      {year} <span>&copy;</span> Lauyrynas Rup.{' '}
      <span>
        powered by <a href="https://punkapi.com/">PunkApi.com</a>
      </span>
    </footer>
  );
};

export default Footer;

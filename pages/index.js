import styles from '../styles/Home.module.css';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Footer />
    </div>
  );
}

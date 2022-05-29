import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Footer from '../Components/Footer';
import Modal from '../Components/Modal';
import { useModalContext } from '../Context/modalContext';
import { useLikedBeerContext } from '../Context/likedBeersContext';

export default function Home() {
  const { modal, toggleModal } = useModalContext();
  const { updateLikedBeers } = useLikedBeerContext();

  useEffect(() => {
    console.log('app start');
    const retrieved = localStorage.getItem('likedBeers');

    if (retrieved) {
      updateLikedBeers(JSON.parse(retrieved));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
      <Search />
      <Footer />
      {modal.display && <Modal />}
    </div>
  );
}

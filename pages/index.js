import styles from '../styles/Home.module.css';
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Footer from '../Components/Footer';
import Modal from '../Components/Modal';
import { useModalContext } from '../Context/modalContext';

export default function Home() {
  const { modal, toggleModal } = useModalContext();
  return (
    <div className={styles.container}>
      <Nav />
      <Search />
      <Footer />
      {modal.display && <Modal />}
    </div>
  );
}

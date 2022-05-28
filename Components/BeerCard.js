import { truncateText } from '../functions/truncate';
import styles from '../styles/BeerCard.module.css';
import { useModalContext } from '../Context/modalContext';
import { useBeerContext } from '../Context/beersContext';

const BeerCard = ({ name, image, description, id }) => {
  const { modal, toggleModal } = useModalContext();
  const { items } = useBeerContext();

  const modalHandler = e => {
    // grab object id
    const itemId = e.target.closest('article').dataset.itemId;
    // find item in all items array
    const beerObject = items.find(item => item.id === +itemId);

    toggleModal(beerObject);
  };
  return (
    <article
      className={styles.card}
      onClickCapture={modalHandler}
      data-item-id={id}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardImageCont}>
          <img src={image ? image : '/bottle.png'} alt={name} loading="lazy" />
        </div>
        <p>{name}</p>
      </div>
      <p className={styles.cardDesc}>{truncateText(description, 100)} ...</p>
    </article>
  );
};

export default BeerCard;

import { truncateText } from '../functions/truncate';
import styles from '../styles/BeerCard.module.css';

const BeerCard = ({ name, image, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardImageCont}>
          <img src={image ? image : '/bottle.png'} alt={name} loading="lazy" />
        </div>
        <p>{name}</p>
      </div>
      <p className={styles.cardDesc}> {truncateText(description, 90)} ...</p>
    </article>
  );
};

export default BeerCard;

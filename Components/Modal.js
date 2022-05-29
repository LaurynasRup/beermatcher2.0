import React, { useState, useEffect } from 'react';
import styles from '../styles/Modal.module.css';
import { useModalContext } from '../Context/modalContext';
import { useBeerContext } from '../Context/beersContext';
import { useLikedBeerContext } from '../Context/likedBeersContext';

const Modal = () => {
  const { likedBeers, updateLikedBeers } = useLikedBeerContext();
  const { modal, toggleModal } = useModalContext();
  const { items } = useBeerContext();
  const modalhandler = e => {
    if (e.target.id === 'modal') {
      toggleModal();
    }
  };

  const likeButtonHandler = () => {
    // find item in all items array
    const beerObject = items.find(item => item.id === modal.item.id);
    // See if liked beer already exists in liked beers array
    const likedExists = likedBeers.some(beer => beer.id === beerObject.id);
    let updatedLikedBeersArr;
    // add or remove beers
    if (!likedExists) {
      updatedLikedBeersArr = [...likedBeers, beerObject];
    } else {
      updatedLikedBeersArr = likedBeers.filter(
        beer => beer.id !== beerObject.id
      );
    }
    updateLikedBeers(updatedLikedBeersArr);
  };

  const [likeExists, setLikeExists] = useState();

  useEffect(() => {
    // Update local storage on every like click
    localStorage.setItem('likedBeers', JSON.stringify(likedBeers));
    // see if current modal item is liked
    setLikeExists(likedBeers.some(beer => beer.id === modal.item.id));
  }, [likedBeers]);

  return (
    <article className={styles.modal} onClick={modalhandler} id="modal">
      <div className={styles.modalInner}>
        <div className={styles.modalTop}>
          <img
            src={modal.item.image_url ? modal.item.image_url : '/bottle.png'}
            alt={modal.item.name}
          />
          <div className={styles.modalTopText}>
            <h2>{modal.item.name}</h2>
            <h3>{modal.item.tagline}</h3>
          </div>
        </div>
        <p className={styles.description}>{modal.item.description}</p>
        <div className={styles.pairing}>
          <div>
            <p>Pair with:</p>
            <ol>
              {modal.item.food_pairing.map((food, idx) => (
                <li key={idx}>{food}</li>
              ))}
            </ol>
          </div>
          <button
            className={`${styles.likeButton} ${
              likeExists ? styles.likeButtonActive : ''
            }`}
            role="button"
            title="Like"
            onClick={likeButtonHandler}
          ></button>
        </div>
      </div>
    </article>
  );
};

export default Modal;

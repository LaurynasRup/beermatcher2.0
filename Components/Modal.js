import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import { useModalContext } from '../Context/modalContext';

const Modal = () => {
  const { modal, toggleModal } = useModalContext();
  const modalhandler = e => {
    if (e.target.id === 'modal') {
      toggleModal();
    }
  };

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
          <button role="button" title="Like"></button>
        </div>
      </div>
    </article>
  );
};

export default Modal;

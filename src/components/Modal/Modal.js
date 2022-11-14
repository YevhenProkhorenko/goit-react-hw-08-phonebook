import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from '../Modal/Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.content}></div>
    </div>,
    modalRoot
  );
};

export default Modal;

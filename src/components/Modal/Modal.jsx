import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalBody } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

const Modal = props => {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        props.onClose();
      }
    },
    [props]
  );
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);  
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalBody>{props.children}</ModalBody>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;

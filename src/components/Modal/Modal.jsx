import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalBody } from "./Modal.styled";


const modalRoot = document.querySelector('#modal');

const Modal = ({ children }) => {
    
    const handleKeyDown = e => {
        if (e.code === 'ESCAPE') {

        }
    }

        return createPortal(
        <ModalBackdrop>
            <ModalBody>
                {children}
            </ModalBody>
        </ModalBackdrop>, modalRoot,
    );
}
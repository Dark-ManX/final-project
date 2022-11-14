import React from 'react';
import Button from 'components/Common/Button/Button';
import { Input } from '../Common/Input/Input';
import { ModalBody } from 'components/Modal/Modal.styled';
import { ReactComponent as Cross } from '../../images/cross.svg';
import { CloseModal } from '../ModalAddsPet/ModalAddsPet.styled';
import { ModalName } from '../ModalAddsPet/ModalAddsPet.styled';

const ModalAddsPet = ({ onClose }) => {
  return (
    <div>
      <ModalBody>
        <CloseModal type="button" onClick={onClose}>
          <Cross width="20px" height="20px" />
        </CloseModal>
        <ModalName>Add pet</ModalName>

        <form>
          <Input
            type="text"
            label="Name pet"
            placeholder="Type name pet"
            required
          />
          <Input
            type="text"
            label="Date of birth"
            placeholder="Type date of birth"
            required
          />
          <Input type="text" label="Breed" placeholder="Type breed" required />

          <Button type="submit" content="Next" variant="primary" />
          <Button type="button" content="Cancel" variant="inverse" />
        </form>
      </ModalBody>
    </div>
  );
};

export default ModalAddsPet;

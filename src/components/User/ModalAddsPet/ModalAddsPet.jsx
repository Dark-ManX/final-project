import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from 'components/Common/Button/Button';
import { Input } from 'components/Common/Input/Input';
import { ReactComponent as Cross } from 'icons/cross.svg';
import { useCreateUserPetsMutation } from 'redux/auth/authOperations';
import {
  CloseModal,
  ModalName,
  AddFileInputContainer,
  AddFileInput,
  AddFileLabelInput,
  UploadImageContainer,
  AddImageButton,
  PlusIcon,
  PetImage,
  ModalAddPetContainer,
  ButtonGroup,
} from './ModalAddsPet.styled';

const MODAL_STATE = {
  IDLE: 'idle',
  UPLOAD_IMAGE: 'uploadImage',
  DONE: 'done',
};

const AddsPet = ({ onClose }) => {
  const [createPet] = useCreateUserPetsMutation();

  const [modalState, setModalState] = useState(MODAL_STATE.IDLE);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');
  const [photoPet, setphotoPet] = useState(null);
  const [comments, setComments] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'petName':
        setName(value);
        break;

      case 'birth':
        setBirth(value);
        break;

      case 'breed':
        setBreed(value);
        break;

      case 'photoPet':
        setphotoPet(e.target.files[0]);
        break;

      case 'comments':
        setComments(value);
        break;

      default:
        return;
    }
  };

  console.log(name);

  const formData = new FormData();
  formData.append('name', name);
  formData.append('birth', birth);
  formData.append('breed', breed);
  formData.append('photoPet', photoPet);
  formData.append('comments', comments);

  const handleSubmit = async e => {
    try {
      console.log(formData.name);
      e.preventDefault();
      if (modalState === MODAL_STATE.IDLE) {
        return setModalState(MODAL_STATE.UPLOAD_IMAGE);
      }
      if (modalState === MODAL_STATE.UPLOAD_IMAGE) {
        setModalState(MODAL_STATE.DONE);
        await createPet(formData);
        Notify.success('Pet added');
        onClose();
        return;
      }
    } catch (err) {
      Notify.failure(err.message);
    }
  };

  return (
    <ModalAddPetContainer>
      <CloseModal type="button" onClick={onClose}>
        <Cross width="20px" height="20px" />
      </CloseModal>

      <ModalName>Add pet</ModalName>

      <form onSubmit={handleSubmit}>
        {modalState === MODAL_STATE.IDLE ? (
          <>
            <Input
              type="text"
              name="petName"
              label="Name pet"
              placeholder="Type name pet"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="birth"
              label="Date of birth"
              placeholder="Type date of birth"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="breed"
              label="Breed"
              placeholder="Type breed"
              required
              onChange={handleChange}
            />
          </>
        ) : null}

        {modalState === MODAL_STATE.UPLOAD_IMAGE ? (
          <>
            <AddFileInputContainer>
              <AddFileLabelInput htmlFor="uploadFile">
                Add photo and some comments
              </AddFileLabelInput>
              <UploadImageContainer>
                {!photoPet ? (
                  <AddImageButton type="button">
                    <PlusIcon />
                    <AddFileInput
                      id="uploadFile"
                      type="file"
                      name="photoPet"
                      onChange={handleChange}
                    />
                  </AddImageButton>
                ) : null}
                {photoPet ? (
                  <PetImage src={URL.createObjectURL(photoPet)} alt={name} />
                ) : null}
              </UploadImageContainer>
            </AddFileInputContainer>

            <Input
              height="100px"
              padding="12px 14px"
              borderRadius="20px"
              as="textarea"
              name="comments"
              label="Comments"
              placeholder="Type comments"
              onChange={handleChange}
            />
          </>
        ) : null}
        <ButtonGroup>
          <Button
            type="submit"
            content={modalState === MODAL_STATE.UPLOAD_IMAGE ? 'Done' : 'Next'}
            variant="primary"
            mr="24px"
          />
          <Button
            type="button"
            onClick={onClose}
            content="Cancel"
            variant="inverse"
          />
        </ButtonGroup>
      </form>
    </ModalAddPetContainer>
  );
};

AddsPet.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  photoPet: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddsPet;

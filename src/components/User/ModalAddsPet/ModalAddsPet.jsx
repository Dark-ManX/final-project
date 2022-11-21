import Button from 'components/Common/Button/Button';
import { Input } from 'components/Common/Input/Input';
import { ReactComponent as Cross } from 'icons/cross.svg';
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
} from './ModalAddsPet.styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {response} from 'api'
import { fetchPetAdd } from 'api/petApi';

const MODAL_STATE = {
  IDLE: 'idle',
  UPLOAD_IMAGE: 'uploadImage',
  DONE: 'done',
};

const AddsPet = ({ onClose }) => {
  const token = useSelector(state => state.token);

  const {addPet} = response;

  const [modalState, setModalState] = useState(MODAL_STATE.IDLE);

  const [petName, setPetName] = useState('');
  const [birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'petName':
        setPetName(value);
        break;

      case 'birth':
        setBirth(value);
        break;

      case 'breed':
        setBreed(value);
        break;

      case 'file':
        setFile(value);
        break;

      case 'info':
        setInfo(value);
        break;

      default:
        return;
    }
  };

// <<<<<<< HEAD:src/components/User/ModalAddsPet/ModalAddsPet.jsx
//   const handleSubmit = async () => {
//     const res = await getAddsPet({name: petName, birth, breed}, token)
//     console.log(res);
//   }
// =======
  const handleSubmit = e => {
    e.preventDefault();
    if (modalState === MODAL_STATE.IDLE) {
      return setModalState(MODAL_STATE.UPLOAD_IMAGE);
    }
    if (modalState === MODAL_STATE.UPLOAD_IMAGE) {
      return setModalState(MODAL_STATE.DONE);
    }
  };

  useEffect(() => {
    if (modalState === MODAL_STATE.DONE) {
      addPet({ name: petName, birth, breed, file, info }, token)
      onClose();
    }
  }, [modalState, petName, birth, breed, file, info, token, onClose]);

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  return (
    <>
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
                {!file ? (
                  <AddImageButton type="button">
                    <PlusIcon />
                    <AddFileInput
                      id="uploadFile"
                      type="file"
                      name="file"
                      onChange={selectFile}
                    />
                  </AddImageButton>
                ) : null}
                {file ? (
                  <PetImage src={URL.createObjectURL(file)} alt={petName} />
                ) : null}
              </UploadImageContainer>
            </AddFileInputContainer>

            <Input
              height="100px"
              padding="12px 14px"
              borderRadius="20px"
              as="textarea"
              name="info"
              label="Comments"
              placeholder="Type comments"
              onChange={handleChange}
            />
          </>
        ) : null}

        <Button
          type="submit"
          content={modalState === MODAL_STATE.UPLOAD_IMAGE ? 'Done' : 'Next'}
          variant="primary"
        />
        <Button type="button" content="Cancel" variant="inverse" />
      </form>
    </>
  );
};

export default AddsPet;

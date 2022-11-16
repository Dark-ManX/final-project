import Button from 'components/Common/Button/Button';
import { Input } from '../Common/Input/Input';
import { ReactComponent as Cross } from 'icons/cross.svg';
import { CloseModal, ModalName } from './ModalAddsPet.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {fetchPetAdd} from 'api/petApi'

const AddsPet = ({ onClose }) => {

  const token = useSelector(state => state.token)

  const [petName, setPetName] = useState('');
  const [birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');

  const handleChange = (e) => {

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

      default:
        return;
    }
  }

  const handleSubmit = async () => {
    const res = await fetchPetAdd({name: petName, birth, breed}, token)
    console.log(res);
  }

  return (
    <>
      
      <CloseModal type="button" onClick={onClose}>
        <Cross width="20px" height="20px" />
      </CloseModal>
      
        <ModalName>Add pet</ModalName>

        <form onSubmit={handleSubmit}>
          <Input
          type="text"
          name='petName'
            label="Name pet"
            placeholder="Type name pet"
          required
          onChange={handleChange}
          />
          <Input
          type="text"
          name='birth'
            label="Date of birth"
            placeholder="Type date of birth"
          required
          onChange={handleChange}
          />
        <Input
          type="text"
          name='breed'
          label="Breed"
          placeholder="Type breed"
          required
          onChange={handleChange} />

          <Button type="submit" content="Next" variant="primary" />
          <Button type="button" content="Cancel" variant="inverse" />
        </form>
      
    </>
  );
};

export default AddsPet;

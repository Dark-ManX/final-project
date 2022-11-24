import axios from 'axios';
import { useState, useEffect } from 'react';

import { PetsList } from 'components/User/PetsList/PetsList';
import Modal from 'components/Modal/Modal';
import ModalAddsPet from 'components/User/ModalAddsPet/ModalAddsPet';
import { ROUTES } from 'routes/routes';
import add from 'icons/addPet.svg';

import { Title } from 'pages/UserPage/UserPage.styled';
import { Container, AddBtn, ContainerTitle } from './PetsData.styled';
import { useGetUserPetsQuery } from 'redux/auth/authOperations';

// const AUTH_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UwMWEyOTkxODkxNmVjZDlkZmJmOSIsImlhdCI6MTY2OTIzMTU2NywiZXhwIjoxNjY5MjY3NTY3fQ.Uu4RDE9b6iMWWT8sxMkImG5An19qaKsbPuMrxii2Shc';

axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const getPets = () => {
  const response = axios.get(`${ROUTES.USER.getUserPets}`);
  return response;
};

export const PetsData = () => {
  const [openModal, setOpenModal] = useState(false);
  const { getUserPets } = useGetUserPetsQuery();
  console.log(getUserPets);

  const handleBtnClick = () => setOpenModal(!openModal);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets()
      .then(({ data }) => {
        setPets(data.data.pets);
        console.log(data.data.pets);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Container>
      <ContainerTitle>
        <Title>My pets:</Title>
        <Title>
          Add pet
          <AddBtn type="button" onClick={handleBtnClick}>
            <img src={add} alt="addPet" />
          </AddBtn>
        </Title>
      </ContainerTitle>
      <PetsList pets={pets} />
      {openModal && (
        <Modal onClose={handleBtnClick}>
          <ModalAddsPet onClose={handleBtnClick} />
        </Modal>
      )}
    </Container>
  );
};

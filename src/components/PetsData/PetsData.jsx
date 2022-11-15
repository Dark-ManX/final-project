import axios from 'axios';
import { useState, useEffect } from 'react';

import { PetsList } from 'components/PetsList/PetsList';
import { ROUTES } from '../../routes/routes';
import add from '../../components/icons/addPet.svg';

import { Container, Title, AddBtn, ContainerTitle } from './PetsData.styled';

axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

const getPets = () => {
  const response = axios.get(`${ROUTES.USER.getUserPets}`);
  return response;
};

export const PetsData = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets()
      .then(({ data }) => setPets(data.data.pets))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Container>
      <ContainerTitle>
        <Title>My pets:</Title>
        <Title>
          Add pet
          <AddBtn>
            <img src={add} alt="addPet" />
          </AddBtn>
        </Title>
      </ContainerTitle>
      {/* відкриває модалку - компонент ModalAddsPet */}
      <PetsList pets={pets} />
    </Container>
  );
};

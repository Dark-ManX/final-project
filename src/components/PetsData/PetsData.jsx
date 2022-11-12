import axios from 'axios';
import { useState, useEffect } from 'react';

import { PetsList } from 'components/PetsList/PetsList';
import { ROUTES } from '../../routes/routes';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdiNWYwMTU1Y2U0MjJkZTI4NGYyNyIsImlhdCI6MTY2ODI2Mjg2NywiZXhwIjoxNjY4Mjk4ODY3fQ.9o04ogrS8yf81kU3p4DJOBL1zvXdhE-3skeHwELZFUY';

axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

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
    <>
      <h2>My pets:</h2>
      <button type="button">Add pet</button>
      {/* відкриває модалку - компонент ModalAddsPet */}
      <PetsList pets={pets} />
    </>
  );
};

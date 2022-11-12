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

// const petsAll = [
//   {
//     _id: '6367dedf4acb4b2e9bf8e393',
//     name: 'Jack',
//     birth: '21.09.2020',
//     breed: 'Pomeranian',
//     owner: '6367b5f0155ce422de284f27',
//     createdAt: '2022-11-06T16:20:47.724Z',
//     updatedAt: '2022-11-06T16:22:27.308Z',
//     comments:
//       'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
//     photoPet: 'Jack.jpg',
//   },
//   {
//     _id: '6368d521808e8ef46949a393',
//     name: 'Jack',
//     birth: '22.04.2018',
//     breed: '22.04.2018',
//     owner: '6367b5f0155ce422de284f27',
//     createdAt: '2022-11-07T09:51:29.490Z',
//     updatedAt: '2022-11-07T10:50:03.082Z',
//     comments:
//       'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
//     photoPet: 'Jackson.jpg',
//   },
// ];

export const PetsData = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets()
      .then(({ data }) => setPets(data.data.pets))
      .catch(error => console.log(error.response.headers));
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

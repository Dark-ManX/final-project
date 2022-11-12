import axios from 'axios';
import { useState, useEffect } from 'react';

import { UserDataItem } from 'components/UserDataItem/UserDataItem';

import { ROUTES } from '../../routes/routes';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdiNWYwMTU1Y2U0MjJkZTI4NGYyNyIsImlhdCI6MTY2ODI2Mjg2NywiZXhwIjoxNjY4Mjk4ODY3fQ.9o04ogrS8yf81kU3p4DJOBL1zvXdhE-3skeHwELZFUY';

axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const getUser = () => {
  const response = axios.get(`${ROUTES.USER.getUserInfo}`);
  return response;
};

export const UserData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser()
      .then(({ data }) => setUser(data.data.user))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      <img src={user.logo} alt={user.name} />
      <button>Edit photo</button>
      <UserDataItem user={user} />
    </>
  );
};

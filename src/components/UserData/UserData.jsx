import axios from 'axios';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

import { UserDataItem } from 'components/UserDataItem/UserDataItem';

import { ROUTES } from '../../routes/routes';

axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

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

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

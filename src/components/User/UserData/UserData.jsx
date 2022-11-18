import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { UserDataItem } from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';
import { ROUTES } from 'routes/routes';

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
    <UserInfo>
      <Avatar>
        <ImgUser
          src="https://st2.depositphotos.com/4323461/8632/v/950/depositphotos_86329636-stock-illustration-business-cat-works-for-a.jpg"
          alt={user.name}
        />
        <EditPhotoBtn>
          <img src={editPhoto} alt="addPet" />
          Edit photo
        </EditPhotoBtn>
      </Avatar>
      <UserDataItem user={user} />
    </UserInfo>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

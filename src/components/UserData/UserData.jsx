import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';
import { ROUTES } from 'routes/routes';

import { useGetUserInfoQuery } from 'redux/auth/authOperations';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhAZ21haWwuY29tIiwiaWF0IjoxNjY4OTc4MjgxLCJleHAiOjE2NjkwMTQyODF9.yCoebGuTWQPK-yKEoTQcTUCrzeq_IvOE244Ub5Mh1_A';
axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const getUser = () => {
  const response = axios.get(`${ROUTES.USER.getUserInfo}`);
  return response;
};

export const UserData = () => {
  const [user, setUser] = useState([]);
  const getUserInfo = useGetUserInfoQuery();
  // console.log(info);
  console.log(getUserInfo);

  // console.log(getUserInfo().then(data => console.log(data)));

  // const fatchUser = async () => {
  //   try {
  //     const result = await getUserInfo;
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // fatchUser();

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
        <label>
          <input type="file" name="Edit photo" />
          <img src={editPhoto} alt="addPet" />
          {/* <span>Edit photo</span> */}
          <EditPhotoBtn>Edit photo</EditPhotoBtn>
        </label>
      </Avatar>
      <UserDataItem user={user} />
    </UserInfo>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

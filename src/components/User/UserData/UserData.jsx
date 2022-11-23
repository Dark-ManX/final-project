import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useGetUserInfoQuery } from 'redux/auth/authOperations';
import { UserDataItem } from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';
import { ROUTES } from 'routes/routes';

// const AUTH_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UwMWEyOTkxODkxNmVjZDlkZmJmOSIsImlhdCI6MTY2OTIzMTU2NywiZXhwIjoxNjY5MjY3NTY3fQ.Uu4RDE9b6iMWWT8sxMkImG5An19qaKsbPuMrxii2Shc';

axios.defaults.baseURL = ROUTES.BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const getUser = () => {
  const response = axios.get(`${ROUTES.USER.getUserInfo}`);
  return response;
};

export const UserData = () => {
  const [file, setFile] = useState();
  const [user, setUser] = useState([]);
  const getUserInfo = useGetUserInfoQuery();
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

  // const [getUserInfo] = useGetUserInfoQuery();

  useEffect(() => {
    getUser()
      .then(({ data }) => setUser(data.data.user))
      .catch(error => console.log(error.message));
  }, []);

  const inputRef = useRef(null);

  const handleUploadClick = event => {
    const click = inputRef.current?.click();
    console.log(click);
  };

  const handleChange = evt => {
    if (!evt.target.files) {
      return;
    }
    setFile(evt.target.files[0]);
    // handleSubmit();
    console.log(evt.target);
    console.log(evt.target.files[0]);
    // handleFile(fileUploaded);
    console.log(file);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const url = 'http://localhost:3000/uploadFile';
    const url = `${ROUTES.BASE_URL}/auth/avatars`;
    console.log(url);
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .patch(url, formData, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.message));
  };

  return (
    <UserInfo>
      <Avatar>
        <ImgUser src={`${ROUTES.BASE_URL}/${user.logo}`} alt={user.name} />
        <form onSubmit={handleSubmit}>
          <EditPhotoBtn onClick={handleUploadClick}>
            <img src={editPhoto} alt="addPet" />
            Edit photo
          </EditPhotoBtn>
          <input
            type="file"
            ref={inputRef}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </form>
      </Avatar>
      <UserDataItem user={user} />
    </UserInfo>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

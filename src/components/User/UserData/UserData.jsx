import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import {
  useGetUserInfoQuery,
  useUpdateAvatarMutation,
} from 'redux/auth/authOperations';
import { UserDataItem } from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';
import { ROUTES } from 'routes/routes';
import { response } from 'api';
import { useSelector } from 'react-redux';

export const UserData = () => {
  const [file, setFile] = useState({});
  const [user, setUser] = useState([]);
  const getUserInfo = useGetUserInfoQuery();
  const [updateAvatar] = useUpdateAvatarMutation();

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);
  console.log(token);

  const fetchUser = async (token) => {
    const res = await getUser(token);
    console.log(res);
    setUser(res);
  };

  console.log(user);

  const inputRef = useRef(null);

  // const handleUploadClick = event => {
  //   const click = inputRef.current?.click();
  //   return click;
  //   // console.log(click);
  // };

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = evt => {
    if (!evt.target.files) {
      return;
    }

    setSelectedFile(evt.target.files[0]);
    console.log(evt.target.files[0]);
    console.log(typeof selectedFile);
    console.log(selectedFile);
    setIsFilePicked(true);

    // const avatar = evt.target.files[0];

    // console.log(evt.target.files[0]);
    // handleSubmit();
    // return avatar;
    // console.log(file);
    // handleFile(fileUploaded);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const url = 'http://localhost:3000/uploadFile';
    // const url = `${ROUTES.BASE_URL}/auth/avatars`;
    // console.log(url);
    // console.log(avatar);
    console.log(selectedFile);
    console.log('Click');

    const formData = new FormData();

    formData.append('File', selectedFile);

    // const AUTH_TOKEN = 'Bearer ';

    // axios.defaults.baseURL = ROUTES.BASE_URL;
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.patch['content-type'] = 'multipart/form-data';

    // axios('https://team-api-blended2.herokuapp.com/avatars', {
    //   method: 'PATCH',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log('Success:', result);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  }

  useEffect(() => {
    fetchUser(token);
  }, []);

  const { logo, name } = user;
  return (
    <UserInfo>
      <Avatar>
        <ImgUser src={`${ROUTES.BASE_URL}/${logo}`} alt={name} />
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="file"
            ref={inputRef}
            multiple
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <EditPhotoBtn onClick={() => inputRef.current?.click()}>
            <img src={editPhoto} alt="addPet" />
            Edit photo
          </EditPhotoBtn>
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

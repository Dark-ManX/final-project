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
import defaultImg from 'img/defaultImg.jpg';
import edit from 'icons/edit.svg';

export const UserData = () => {
  const [file, setFile] = useState({});
  const [user, setUser] = useState([]);
  const getUserInfo = useGetUserInfoQuery();
  // const [updateAvatar] = useUpdateAvatarMutation();
console.log(user)
  const { getUser } = response;

  const token = useSelector(state => state.auth.token);
  console.log(token);

  const fetchUser = async (token) => {
    const res = await getUser(token);
    console.log(res);
    setUser(res);
  };

  console.log(user);

  // const inputRef = useRef(null);

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
  const { logo, name, email, birth, phone, city } = user;

  useEffect(() => {
    fetchUser(token);
  }, []);

  return (
    <UserInfo>
      <Avatar>
        <ImgUser src={logo ? logo : defaultImg} alt={name} />
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <label>
            <input
            type="file"
            // ref={inputRef}
            multiple
            onChange={handleChange}
            style={{ display: 'none' }}
            />
            <EditPhotoBtn >
            <img src={editPhoto} alt="addPet" />
            Edit photo
            </EditPhotoBtn>
          </label>
          <label>
            <p>Name</p>
            <input type="text" name='name' value={name} disabled={true}/><button onClick={handleChange}><img src={edit} alt="edit information about user" /></button></label>
          <label htmlFor="">
            <p>Email</p>
            <input type="text" name='email' value={email} disabled={true} /><button onClick={handleChange}><img src={edit} alt="edit information about user" /></button></label>
          <label htmlFor="">
            <p>Birthday</p>
            <input type="text" name='birthday' value={birth} disabled={true}/><button onClick={handleChange}><img src={edit} alt="edit information about user" /></button></label>
          <label htmlFor="">
            <p>Phone</p>
            <input type="text" name='phone' value={phone} disabled={true}/><button onClick={handleChange}><img src={edit} alt="edit information about user" /></button></label>
          <label htmlFor="">
            <p>City</p>
            <input type="text" name='city' value={city} disabled={true}/><button onClick={handleChange}><img src={edit} alt="edit information about user" /></button></label>
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

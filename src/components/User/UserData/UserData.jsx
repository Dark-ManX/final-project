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
  const [logo, setLogo] = useState('');
  const getUserInfo = useGetUserInfoQuery();
  const [updateAvatar] = useUpdateAvatarMutation();

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);
  console.log(token);

  const fetchUser = async token => {
    const res = await getUser(token);
    console.log(res);
    setUser(res);
    console.log(res.logo);
    setLogo(res.logo);
  };

  console.log(user);

  const handleChangeAvatar = async evt => {
    console.log(evt.target.files[0]);
    console.log('Click');

    const formData = new FormData();

    formData.append('image', evt.target.files[0]);

    const { data } = await updateAvatar(formData);
    console.log(data);
    // setLogo(data);
  };

  useEffect(() => {
    fetchUser(token);
  }, []);

  return (
    <UserInfo>
      <Avatar>
        <ImgUser src={`${ROUTES.BASE_URL}/${logo}`} alt={user.name} />
        <label>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            name="image"
            onChange={handleChangeAvatar}
            style={{ display: 'none' }}
          />
          <EditPhotoBtn>
            <img src={editPhoto} alt="addPet" />
            Edit photo
          </EditPhotoBtn>
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

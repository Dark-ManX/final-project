import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useUpdateAvatarMutation } from 'redux/auth/authOperations';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import defaultImg from '../../../img/defaultImg.jpg';
import { ROUTES } from 'routes/routes';
import { response } from 'api';

import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';

const UserData = () => {
  const [user, setUser] = useState([]);
  const [logo, setLogo] = useState('');
  const [updateAvatar] = useUpdateAvatarMutation();

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);

  const fetchUser = async token => {
    const res = await getUser(token);
    setUser(res);
    setLogo(res.logo);
  };

  const handleChangeAvatar = async evt => {
    const formData = new FormData();

    formData.append('avatar', evt.target.files[0]);

    const {
      data: { avatarURL },
    } = await updateAvatar(formData);
    setLogo(avatarURL);
  };

  useEffect(() => {
    fetchUser(token);
  }, []);

  const avatarUser = () => {
    if (logo.includes('https://s.gravatar.com')) {
      return defaultImg;
    } else {
      return `${ROUTES.BASE_URL}/${logo}`;
    }
  };

  return (
    <UserInfo>
      <Avatar>
        <ImgUser src={avatarUser()} alt={user.name} />
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
      <UserDataItem />
    </UserInfo>
  );
};

export default UserData;

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

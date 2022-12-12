import { response } from 'api';
import Error from 'components/Common/Error/Error';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import defaultImg from 'img/defaultImg.jpg';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateAvatarMutation } from 'redux/auth/authOperations';

import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';

const UserData = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [updateAvatar] = useUpdateAvatarMutation();

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);

  const handleChangeAvatar = async evt => {
    try {
      const formData = new FormData();

      formData.append('avatar', evt.target.files[0]);

      await updateAvatar(formData);
    } catch (err) {
      setAvatar(defaultImg);
    }
  };

  useEffect(() => {
    const fetchUser = async token => {
      try {
        const res = await getUser(token);
        setAvatar(res.avatar);

        setUser(res);
      } catch (err) {
        setError(true);
      }
    };

    fetchUser(token);
  }, [avatar, getUser, token, user]);

  return (
    <UserInfo>
      {!error ? (
        <>
          <Avatar>
            <ImgUser src={user.logo ? user.logo : defaultImg} alt={user.name} />
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
        </>
      ) : (
        <Error />
      )}
    </UserInfo>
  );
};

export default UserData;

UserDataItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

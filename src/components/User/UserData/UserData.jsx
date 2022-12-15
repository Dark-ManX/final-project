import { response } from 'api';
import Error from 'components/Common/Error/Error';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import defaultImg from 'img/defaultImg.jpg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';

const UserData = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState(null);

  const { getUser, updateAvatar } = response;

  const token = useSelector(state => state.auth.token);

  const updatePhoto = async (img, token) => {
    try {
      await updateAvatar(img, token);
      Notify.success('Photo updated');
    } catch (err) {
      Notify.failure(err.message);
    }
  };

  const handleChangeAvatar = evt => {
    try {
      const formData = new FormData();
      formData.append('avatar', evt.target.files[0]);
    } catch (err) {
      setAvatar(defaultImg);
    }
  };

  useEffect(() => {
    const fetchUser = async token => {
      try {
        const res = await getUser(token);

        setAvatar(res.logo);

        setUser(res);
      } catch (err) {
        setError(true);
      }
    };

    fetchUser(token);
  }, [getUser, token, user]);

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

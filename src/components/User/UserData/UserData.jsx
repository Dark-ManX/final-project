import { response } from 'api';
import Error from 'components/Common/Error/Error';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import editPhoto from 'icons/editPhoto.svg';
import defaultImg from 'img/defaultImg.jpg';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useUpdateAvatarMutation } from 'redux/auth/authOperations';

import { Avatar, EditPhotoBtn, ImgUser, UserInfo } from './UserData.styled';

const UserData = ({ data }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(data);
  const [avatar, setAvatar] = useState(null);

  const navigate = useNavigate();

  const { getUser, updateAvatar } = response;

  const token = useSelector(state => state.auth.token);

  const handlerAvatar = evt => {
    const formData = new FormData();

    formData.append('avatar', evt.target.files[0]);
    setAvatar(formData);
  };

  useEffect(() => {
    const userSetter = async (state, key) => {
      try {
        if (!state) {
          const res = await getUser(key);
          setUser(res);
          return;
        }
        setUser(state);
      } catch (err) {
        console.log(err.message);
        Notify.failure(err.message);
        navigate('/login');
      }
    };

    userSetter(data, token);

    const avatarSetter = async (img, key) => {
      try {
        if (!img) {
          return;
        }
        const res = await updateAvatar(img, key);
        setUser({ ...user, logo: res });

        return;
      } catch (err) {
        console.log(err.message);
        Notify.failure(err.message);
        navigate('/login');
      }
    };

    avatarSetter(avatar, token);
  }, [avatar, data, getUser, token, updateAvatar]);

  return (
    <UserInfo>
      {!error ? (
        <>
          <Avatar>
            {console.log(user)}
            <ImgUser src={user?.logo ? user.logo : defaultImg} alt="name" />
            <label>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                name="image"
                onChange={handlerAvatar}
                style={{ display: 'none' }}
              />
              <EditPhotoBtn>
                <img src={editPhoto} alt="addPet" />
                Edit photo
              </EditPhotoBtn>
            </label>
          </Avatar>
          <UserDataItem info={user} />
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

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { response } from 'api';
import edit from 'icons/edit.svg';
import done from 'icons/done.svg';
import { useUpdateUserInfoMutation } from 'redux/auth/authOperations';
import {
  UserInfoList,
  UserInfoItem,
  UserInfoText,
  UserInfoBtn,
  UserInfoData,
  FormUpdate,
  InputUpdate,
} from './UserDataItem.styled';

const UserDataItem = () => {
  const [updateEmail, setUpdateEmail] = useState(false);
  const [updateName, setUpdateName] = useState(false);
  const [updateBirthday, setUpdateBirthday] = useState(false);
  const [updateCity, setUpdateCity] = useState(false);
  const [updatePhone, setUpdatePhone] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [birthdayUser, setBirthdayUser] = useState('');
  const [phoneUser, setPhoneUser] = useState('');
  const [cityUser, setCityUser] = useState('');
  const [updateInfoUser] = useUpdateUserInfoMutation();

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const fetchUser = async token => {
      const res = await getUser(token);

      if (res) {
        const { name, email, birthday, phone, city } = res;
        setNameUser(name);
        setEmailUser(email);
        setBirthdayUser(birthday);
        setPhoneUser(phone);
        setCityUser(city);
        return;
      }
    };

    fetchUser(token);
  }, [getUser, token]);

  const updateUserValue = {
    name: nameUser,
    email: emailUser,
    birthday: birthdayUser,
    phone: phoneUser,
    city: cityUser,
  };

  const handleUpdateName = evt => {
    setUpdateName(!updateName);
    updateInfoUser(updateUserValue).then(err => {
      if (err.error) {
        return Notiflix.Notify.failure(`${err.error.data.message}`);
      }
    });
  };

  const handleUpdateEmail = evt => {
    setUpdateEmail(!updateEmail);
    updateInfoUser(updateUserValue).then(err => {
      if (err.error) {
        return Notiflix.Notify.failure(`${err.error.data.message}`);
      }
    });
  };

  const handleUpdateBirthday = evt => {
    setUpdateBirthday(!updateBirthday);
    updateInfoUser(updateUserValue).then(err => {
      if (err.error) {
        return Notiflix.Notify.failure(`${err.error.data.message}`);
      }
    });
  };

  const handleUpdateCity = evt => {
    setUpdateCity(!updateCity);
    updateInfoUser(updateUserValue).then(err => {
      if (err.error) {
        return Notiflix.Notify.failure(`${err.error.data.message}`);
      }
    });
  };

  const handleUpdatePhone = evt => {
    setUpdatePhone(!updatePhone);
    updateInfoUser(updateUserValue).then(err => {
      if (err.error) {
        return Notiflix.Notify.failure(`${err.error.data.message}`);
      }
    });
  };

  const handleChangeValue = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'nameUser':
        setNameUser(value);
        break;

      case 'emailUser':
        setEmailUser(value);
        break;

      case 'birthdayUser':
        setBirthdayUser(value);
        break;

      case 'phoneUser':
        setPhoneUser(value);
        break;

      case 'cityUser':
        setCityUser(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    setUpdateEmail(!updateEmail);
    setUpdateName(!updateName);
    setUpdateBirthday(!updateBirthday);
    setUpdateCity(!updateCity);
    setUpdatePhone(!updatePhone);
  };

  return (
    <UserInfoList>
      <UserInfoItem>
        <UserInfoText>Name:</UserInfoText>
        {!updateName ? (
          <>
            <UserInfoData>{nameUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateName}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate encType="multipart/form-data" onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="nameUser"
                value={nameUser}
                onChange={handleChangeValue}
                autoComplete="off"
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateName}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Email:</UserInfoText>
        {!updateEmail ? (
          <>
            <UserInfoData>{emailUser}</UserInfoData>
            <UserInfoBtn
              type="button"
              onClick={handleUpdateEmail}
              isActive="true"
            >
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="emailUser"
                value={emailUser}
                onChange={handleChangeValue}
                autoComplete="off"
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateEmail}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Birthday:</UserInfoText>
        {!updateBirthday ? (
          <>
            <UserInfoData>{birthdayUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateBirthday}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="birthdayUser"
                value={birthdayUser}
                onChange={handleChangeValue}
                autoComplete="off"
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateBirthday}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Phone:</UserInfoText>
        {!updatePhone ? (
          <>
            <UserInfoData>{phoneUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdatePhone}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="phone"
                name="phoneUser"
                value={phoneUser}
                onChange={handleChangeValue}
                autoComplete="off"
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdatePhone}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>City:</UserInfoText>
        {!updateCity ? (
          <>
            <UserInfoData>{cityUser}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateCity}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="cityUser"
                value={cityUser}
                onChange={handleChangeValue}
                autoComplete="off"
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleUpdateCity}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>
    </UserInfoList>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
};

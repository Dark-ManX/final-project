import { useState } from 'react';
import PropTypes from 'prop-types';
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

export const UserDataItem = ({ user }) => {
  const { name, email, birthday, phone, city } = user;

  const [updateUser, setUpdateUser] = useState(false);
  const [nameUser, setNameUser] = useState(name);
  const [emailUser, setEmailUser] = useState(email);
  const [birthdayUser, setBirthdayUser] = useState(birthday);
  const [phoneUser, setPhoneUser] = useState(phone);
  const [cityUser, setCityUser] = useState(city);
  const [userInfo, setUserInfo] = useState({});
  // const [updateInfoUser] = useUpdateUserInfoMutation();
  // console.log(updateInfoUser);

  const handleUpdateUser = evt => {
    console.log(evt.target);
    setUpdateUser(!updateUser);
    console.log(updateUser);
  };

  const handleChangeValue = evt => {
    const { name, value } = evt.currentTarget;
    console.log(name, value);

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

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('click');

    const updateUserValue = {
      name: nameUser,
      email: emailUser,
      birthday: birthdayUser,
      phone: phoneUser,
      city: cityUser,
    };

    // updateInfoUser({payload: updateUserValue});
    setUserInfo(updateUserValue);
    setUpdateUser(!updateUser);

    console.log(updateUserValue);
  };

  return (
    <UserInfoList>
      {}
      <UserInfoItem>
        <UserInfoText>Name:</UserInfoText>
        {!updateUser ? (
          <>
            <UserInfoData>{name}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateUser}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="nameUser"
                value={nameUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleSubmit}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Email:</UserInfoText>
        {!updateUser ? (
          <>
            <UserInfoData>{email}</UserInfoData>
            <UserInfoBtn
              type="button"
              onClick={handleUpdateUser}
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
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleSubmit}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Birthday:</UserInfoText>
        {!updateUser ? (
          <>
            <UserInfoData>{birthday}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateUser}>
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
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleSubmit}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Phone:</UserInfoText>
        {!updateUser ? (
          <>
            <UserInfoData>{phone}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateUser}>
              <img src={edit} alt="edit information about user" />
            </UserInfoBtn>
          </>
        ) : (
          <>
            <FormUpdate onSubmit={handleSubmit}>
              <InputUpdate
                type="text"
                name="phoneUser"
                value={phoneUser}
                onChange={handleChangeValue}
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleSubmit}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>City:</UserInfoText>
        {!updateUser ? (
          <>
            <UserInfoData>{city}</UserInfoData>
            <UserInfoBtn type="button" onClick={handleUpdateUser}>
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
              />
            </FormUpdate>
            <UserInfoBtn type="button" onClick={handleSubmit}>
              <img src={done} alt="update information about user" />
            </UserInfoBtn>
          </>
        )}
      </UserInfoItem>
    </UserInfoList>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
};

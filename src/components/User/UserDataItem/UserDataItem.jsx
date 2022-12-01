import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { response } from 'api';
import edit from 'icons/edit.svg';
import done from 'icons/done.svg';
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from 'redux/auth/authOperations';
import {
  UserInfoList,
  UserInfoItem,
  UserInfoText,
  UserInfoBtn,
  UserInfoData,
  FormUpdate,
  InputUpdate,
} from './UserDataItem.styled';

export const UserDataItem = () => {
  const [updateUser, setUpdateUser] = useState(true);
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [birthdayUser, setBirthdayUser] = useState('');
  const [phoneUser, setPhoneUser] = useState('');
  const [cityUser, setCityUser] = useState('');
  const [updateInfoUser] = useUpdateUserInfoMutation();

  const { getUser } = response;

  const token = useSelector(state => state.auth.token);

  const fetchUser = async token => {
    const res = await getUser(token);
    console.log(res);

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

  useEffect(() => {
    fetchUser(token);
  }, []);

  // const nameRef = useRef(nameUser);
  // const emailRef = useRef(emailUser);
  // const birthdayRef = useRef(birthdayUser);
  // const phoneRef = useRef(phoneUser);
  // const cityRef = useRef(cityUser);

  // console.log(useRef(nameUser));
  // console.log(useRef(emailUser));
  // console.log(useRef(birthdayUser));
  // console.log(useRef(phoneUser));
  // console.log(useRef(cityUser));

  // function isFieldChanged() {
  //   const changed =
  //     nameRef.current !== name ||
  //     emailRef.current !== email ||
  //     birthdayRef.current !== birthday ||
  //     phoneRef.current !== phone ||
  //     cityRef.current !== city;

  //   if (changed) {
  //     nameRef.current = name;
  //     emailRef.current = email;
  //     birthdayRef.current = birthday;
  //     phoneRef.current = phone;
  //     cityRef.current = city;
  //   }

  //   return changed;
  // }

  // const handleUpdateUser = async (dataUser) => {
  //   await updateInfoUser(dataUser);
  // };

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

  const handleSubmit = async evt => {
    // evt.preventDefault();

    // const input = evt.target.parentNode.querySelector('input');
    // console.log(input.value);
    // console.log(input.name);
    console.log('click');

    setUpdateUser(!updateUser);
    // input.focus();
    // console.log(updateUser);

    const updateUserValue = {
      name: nameUser,
      email: emailUser,
      birthday: birthdayUser,
      phone: phoneUser,
      city: cityUser,
    };

    // if (isFieldChanged()) {
    //   const obj = {};
    //   obj[input.name] = input.value;
    //   console.log(obj);
    //   updateInfoUser(obj);
    // }

    updateInfoUser(updateUserValue);
    // setUserInfo(updateUserValue);
    // setUpdateUser(!updateUser);

    console.log(updateUserValue);
  };

  return (
    <UserInfoList>
      {}
      <UserInfoItem>
        <UserInfoText>Name:</UserInfoText>
        <InputUpdate
          type="text"
          name="nameUser"
          value={nameUser}
          disabled={updateUser}
          onChange={handleChangeValue}
          onSubmit={handleSubmit}
        />
        <UserInfoBtn type="button" onClick={handleSubmit}>
          {!updateUser ? (
            <img src={done} alt="update information about user" />
          ) : (
            <img src={edit} alt="update information about user" />
          )}
        </UserInfoBtn>
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Email:</UserInfoText>
        <InputUpdate
          type="text"
          name="emailUser"
          value={emailUser}
          disabled={updateUser}
          onChange={handleChangeValue}
          onSubmit={handleSubmit}
        />
        <UserInfoBtn type="button" onClick={handleSubmit}>
          {!updateUser ? (
            <img src={done} alt="update information about user" />
          ) : (
            <img src={edit} alt="update information about user" />
          )}
        </UserInfoBtn>
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Birthday:</UserInfoText>
        <InputUpdate
          type="text"
          name="birthdayUser"
          value={birthdayUser}
          disabled={updateUser}
          onChange={handleChangeValue}
          onSubmit={handleSubmit}
        />
        <UserInfoBtn type="button" onClick={handleSubmit}>
          {!updateUser ? (
            <img src={done} alt="update information about user" />
          ) : (
            <img src={edit} alt="update information about user" />
          )}
        </UserInfoBtn>
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>Phone:</UserInfoText>
        <InputUpdate
          type="text"
          name="phoneUser"
          value={phoneUser}
          disabled={updateUser}
          onChange={handleChangeValue}
          onSubmit={handleSubmit}
        />
        <UserInfoBtn type="button" onClick={handleSubmit}>
          {!updateUser ? (
            <img src={done} alt="update information about user" />
          ) : (
            <img src={edit} alt="update information about user" />
          )}
        </UserInfoBtn>
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoText>City:</UserInfoText>
        <InputUpdate
          type="text"
          name="cityUser"
          value={cityUser}
          disabled={updateUser}
          onChange={handleChangeValue}
          onSubmit={handleSubmit}
        />
        <UserInfoBtn type="button" onClick={handleSubmit}>
          {!updateUser ? (
            <img src={done} alt="update information about user" />
          ) : (
            <img src={edit} alt="update information about user" />
          )}
        </UserInfoBtn>
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

import { useState, useRef } from 'react';
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

  const [updateUser, setUpdateUser] = useState(true);
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [birthdayUser, setBirthdayUser] = useState('');
  const [phoneUser, setPhoneUser] = useState('');
  const [cityUser, setCityUser] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [updateInfoUser] = useUpdateUserInfoMutation();
  // console.log(updateInfoUser);

  console.log(useRef(name));
  console.log(useRef(email));
  console.log(useRef(birthday));
  console.log(useRef(phone));
  console.log(useRef(city));
  const nameRef = useRef(name);
  const emailRef = useRef(email);
  const birthdayRef = useRef(birthday);
  const phoneRef = useRef(phone);
  const cityRef = useRef(city);

  function isFieldChanged() {
    const changed =
      nameRef.current !== name ||
      emailRef.current !== email ||
      birthdayRef.current !== birthday ||
      phoneRef.current !== phone ||
      cityRef.current !== city;

    if (changed) {
      nameRef.current = name;
      emailRef.current = email;
      birthdayRef.current = birthday;
      phoneRef.current = phone;
      cityRef.current = city;
    }

    return changed;
  }

  // const handleUpdateUser = async (dataUser) => {
  //   await updateInfoUser(dataUser);
  // };

  const handleChangeValue = evt => {
    const { name, value } = evt.currentTarget;
    // console.log(evt.target.nextSibling);

    // const buttonSubmit = evt.target.nextSibling;
    // buttonSubmit.disabled = !evt.target.validity.valid;

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

    const input = evt.target.parentNode.querySelector('input');
    console.dir(input);
    console.log('click');

    setUpdateUser(!updateUser);
    input.focus();
    console.log(updateUser);

    const updateUserValue = {
      name,
      email,
      birthday,
      phone,
      city,
    };

    if (isFieldChanged()) {
      const obj = {};
      obj[input.name] = input.value;
      updateInfoUser(obj);
    }
    // updateInfoUser({payload: updateUserValue});
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
          value={name}
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
          value={email}
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
          value={birthday}
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
          value={phone}
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
          value={city}
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

      {/* <UserInfoItem>
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
      </UserInfoItem> */}
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

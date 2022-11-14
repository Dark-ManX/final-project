import { useRegisterUserMutation } from 'redux/auth/authOperations';
import { useCreateUserMutation } from 'redux/auth/authOperations';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

const RegistrationDetails = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [registerNewUser] = useRegisterUserMutation();
  const [editableUser, setEditableUser] = useState({});

  const dispatch = useDispatch();

  // useEffect(() => {
  //   setEditableUser(selectedUser);
  // }, [selectedUser, id]);

  // const onChange = ({ target: { name, value } }) => {
  //   setEditableUser(currentData => ({ ...currentData, [name]: value }));
  // };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'city':
        setCity(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const registerUser = () => {
    const newUser = {
      name,
      city,
      phone,
    };
    registerNewUser(newUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    registerUser();

    reset();
  };
  const reset = () => {
    setName('');
    setCity('');
    setPhone('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="City, region"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Mobile phone"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <button type="submit">Back</button>
      </form>
    </>
  );
};

export default RegistrationDetails;

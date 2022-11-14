import { useCreateUserMutation } from 'redux/auth/authOperations';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const getNews = async () => {
  const { data } = await axios.get(`/register`);
};

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [createNewUser] = useCreateUserMutation();
  const registrationDetails = { city, name, phone };
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        // console.log(email);
        break;

      case 'password':
        setPassword(value);
        // console.log(password);
        break;

      default:
        return;
    }
  };

  const createUser = async () => {
    const newUser = { email, password };
    const { data } = await createNewUser(newUser);
    const { id } = data.data.user;
    setUserId(id);
    console.log(id);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const updatedUser = await createUser();
    console.log(updatedUser);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const result = async () => {
    try {
      const data = await axios.patch(
        `https://team-api-blended2.herokuapp.com/register/${userId}`,
        registrationDetails
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    result();
  }, [userId]);

  return (
    <>
      {!userId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />
          {/* <Link to={`/register/${userId}`}> */}
          <button type="submit">Submit</button>
          {/* </Link> */}
        </form>
      ) : (
        <p>Привіт</p>
      )}
    </>
  );
};

export default Registration;

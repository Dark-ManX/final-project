import { useCreateUserMutation } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import RegistrationDetails from '../../pages/RegisterPageDetails/RegisterPageDetails';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  // const [username, setUsername] = useState('');
  // const [city, setCity] = useState('');
  // const [phone, setPhone] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // const [registerNewUser] = useRegisterUserMutation();
  const [createNewUser] = useCreateUserMutation();

  // const registrationDetails = { city, name, phone };

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

      // case 'name':
      //   setName(value);
      //   break;

      // case 'city':
      //   setCity(value);
      //   break;

      // case 'phone':
      //   setPhone(value);
      //   break;

      default:
        return;
    }
  };

  const createUser = async () => {
    const newUser = { email, password };
    const { data } = await createNewUser(newUser);
    console.log(data);
    const { id } = data.data.user;
    setUserId(id);
    console.log(id);
    return id;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const updatedUser = await createUser();
    setUserId(updatedUser);
    reset();
    navigate(`/register/${updatedUser}`);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  // const result = async () => {
  //   try {
  //     const fetchUser = await fetch(
  //       `https://team-api-blended2.herokuapp.com/register/${userId}`,
  //       {
  //         method: 'PATCH',
  //         body: { name, city, phone },
  //         headers: { 'Content-Type': 'string' },
  //       }
  //     );
  //     console.log(fetchUser);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // try {
  //   //   const data = await axios.patch(
  //   //     `https://team-api-blended2.herokuapp.com/register/${userId}`,
  //   //     registrationDetails
  //   //   );
  //   //   return data;
  //   //   console.log(data);
  //   // } catch (error) {
  //   //   console.log(error.message);
  //   // }
  // };

  // const handleRegisterSubmit = event => {
  //   event.preventDefault();
  //   result();
  //   resetRegister();
  // };

  // const resetRegister = () => {
  //   setName('');
  //   setCity('');
  //   setPhone('');
  // };

  useEffect(() => {}, [userId]);

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

          <button type="submit">
            {/* <navigate to={`/register/${userId}`} /> */}
            Submit
          </button>
        </form>
      ) : (
        <RegistrationDetails details={userId} />
      )}
    </>
  );
};

export default Registration;

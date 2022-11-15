import { useCreateUserMutation } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RegistrationDetails from '../../pages/RegisterPageDetails/RegisterPageDetails';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  const navigate = useNavigate();

  const [createNewUser] = useCreateUserMutation();
  
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

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

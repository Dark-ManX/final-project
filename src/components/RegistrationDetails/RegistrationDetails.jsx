import { useRegisterUserMutation } from 'redux/auth/authOperations';
import React, { useState } from 'react';

const RegistrationDetails = ({ details }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [registerNewUser] = useRegisterUserMutation();
  console.log(details);

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

  const registerUser = async () => {
    const newUser = {
      name,
      city,
      phone,
    };
    await registerNewUser(newUser, details);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await registerUser();

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

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import userEvent from '@testing-library/user-event';
import { nanoid } from 'nanoid';

const RegistrationDetails = ({ id }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [registerNewUser] = useRegisterUserMutation();

  const dispatch = useDispatch();

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
      id: nanoid(5),
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

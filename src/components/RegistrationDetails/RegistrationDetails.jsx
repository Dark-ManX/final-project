import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import { useEffect, useParams, useSelector } from 'react';
import { useCreateUserMutation } from 'redux/auth/authOperations';
import { getUserId } from '../../redux/auth/authSelectors';

const RegistrationDetails = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [registerNewUser] = useRegisterUserMutation();
  const [createNewUser] = useCreateUserMutation();

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
      name,
      city,
      phone,
    };
    console.log(newUser.id);
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

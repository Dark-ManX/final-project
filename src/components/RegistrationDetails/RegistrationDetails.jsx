import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../../redux/auth/authOperations';

const RegistrationDetails = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

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
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, city, phone }));

    reset();
  };
  const reset = () => {
    setName('');
    setCity('');
    setPhone('');
  };
  return (
    <>
      <form>
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
          type="text"
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

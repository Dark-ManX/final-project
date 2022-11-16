import { useRegisterUserMutation } from 'redux/auth/authOperations';
import React, { useState } from 'react';
import {
  Input,
  Title,
  Container,
  Form,
  RegisterBtn,
  BackBtn,
  P,
  Span,
} from './RegisterPageDetails.styled';
import { Link, useLocation, useParams } from 'react-router-dom';
import wave from '../../img/bigWave.jpg';
import { useSelector } from 'react-redux';

const RegistrationDetails = ({ details }) => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [registerNewUser] = useRegisterUserMutation();
  const { id } = useParams();
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
      <Container>
        <Title>Registration</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="city"
            value={city}
            placeholder="City, region"
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Mobile phone"
            onChange={handleChange}
          />
          <RegisterBtn type="submit">Register</RegisterBtn>
          <Link to={`/login`} state={{ from: location }}>
            <BackBtn type="submit">Back</BackBtn>
          </Link>
          <P>
            Already have an account?
            <Link to={`/login`} state={{ from: location }}>
              <Span>Login </Span>
            </Link>
          </P>
        </Form>
      </Container>
    </>
  );
};

export default RegistrationDetails;

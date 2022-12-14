import FirstEl from 'components/Auth/RegisterFormEl/FirstEl';
import SecondEl from 'components/Auth/RegisterFormEl/SecondEl';
import Notiflix, { Notify } from 'notiflix';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import {
  Button,
  Container,
  Form,
  ImageContainer,
  P,
  RegisterContainer,
  StyledLink,
  Title,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const [registerNewUser] = useRegisterUserMutation();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTypePassword = type => {
    setShowPassword(type);
  };

  const handleTypeConfirm = type => {
    setShowConfirmPassword(type);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'confirmedPassword':
        setConfirmedPassword(value);
        console.log(confirmedPassword);
        break;

      case 'email':
        setEmail(value);
        console.log(email);
        break;

      case 'password':
        setPassword(value);
        console.log(password);
        break;

      case 'name':
        setName(value);
        console.log(name);
        break;

      case 'city':
        setCity(value);
        console.log(city);
        break;

      case 'phone':
        setPhone(value);
        console.log(phone);
        break;

      default:
        break;
    }
  };

  const user = {
    email,
    password,
    name,
    city,
    phone,
  };
  console.log('object', user);

  const registration = async data => {
    try {
      const res = await registerNewUser(data);

      if (res?.data) {
        navigate('/user', { replace: true });
        return;
      }
      Notify.failure('Such email already exist');
    } catch (err) {
      Notify.failure(err.message);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (email === '' || !email.includes('@')) {
      return Notiflix.Notify.failure('Please, enter a valid email!');
    }

    if (password === '' || password.includes(' ')) {
      return Notiflix.Notify.failure(
        'Please, enter a valid password without spaces!'
      );
    }

    if (confirmedPassword !== password || confirmedPassword === '') {
      return Notiflix.Notify.failure('Passwords do not match!');
    }

    if (!/^[a-zA-Z]{2,30}/g.test(name)) {
      return Notiflix.Notify.info('Name may only include letters');
    }
    if (name === '') {
      return Notiflix.Notify.failure('Please, enter your name');
    }

    if (city === '') {
      return Notiflix.Notify.failure('Please, enter your city and region ');
    }
    if (!/^(([a-zA-Z ](,)?)*)+$/g.test(city)) {
      return Notiflix.Notify.info(
        'Please, enter your city and region separated by comma and without spaces'
      );
    }
    if (phone === '') {
      return Notiflix.Notify.failure('Please, enter your phone number');
    }
    if (!/^[+0-9]{13}$/g.test(phone)) {
      return Notiflix.Notify.info(
        'Your phone number must start with + and consist of 12 numbers'
      );
    }

    registration(user);
  };

  console.log(page);

  return (
    <ImageContainer>
      <RegisterContainer>
        <Container>
          <Title>Registration</Title>

          <Form onSubmit={handleSubmit}>
            {!page ? (
              <FirstEl
                data={showPassword}
                confirmData={showConfirmPassword}
                handleData={handleTypePassword}
                handleConfirmData={handleTypeConfirm}
                provideChange={handleChange}
              />
            ) : (
              <SecondEl provideChange={handleChange} />
            )}

            {page ? (
              <Button type="submit" disabled={!name || !city || !phone}>
                Register
              </Button>
            ) : null}

            <Button
              type="button"
              className={page ? 'back' : ''}
              disabled={!email || !password || confirmedPassword !== password}
              onClick={
                !page ? () => setPage(page + 1) : () => setPage(page - 1)
              }
            >
              {!page ? 'Next' : 'Back'}
            </Button>
          </Form>

          <P>
            Already have an account?{' '}
            <StyledLink to="/login" state={{ from: location }}>
              Login
            </StyledLink>
          </P>
        </Container>
      </RegisterContainer>
    </ImageContainer>
  );
};

export default RegisterPage;

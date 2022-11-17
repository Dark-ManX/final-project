import { useCreateUserMutation } from '../../redux/auth/authOperations';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
import {
  Input,
  Title,
  Container,
  Form,
  Button,
  P,
  Span,
  ImageContainer,
  Section,
} from './RegisterPage.styled';

const Registration = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [page, setPage] = useState(0);

  const USER_REGEX = /^[A-Z]{3-20}$/;
  const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;
  const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const [user, setNewUser] = useState({});
  // const [username, setUsername] = useState('');
  // const [city, setCity] = useState('');
  // const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const [createNewUser] = useCreateUserMutation();

  const FormTitles = ['Sign Up', 'Personal Info', 'Other'];

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
        <Section>
          <ImageContainer>
            <Container>
              <Title>Registration</Title>
              <Form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
                <Button type="submit">Next</Button>
                <P>
                  Already have an account?{' '}
                  <Link to={`/login`} state={{ from: location }}>
                    <Span>Login </Span>
                  </Link>
                </P>
              </Form>
            </Container>
          </ImageContainer>
        </Section>
      ) : (
        <RegistrationDetails id={userId} />
      )}
    </>
  );
};

export default Registration;

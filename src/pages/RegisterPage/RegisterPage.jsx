import { useCreateUserMutation } from '../../redux/auth/authOperations';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
import AuthForm from 'components/AuthForm';
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    city: '',
    phone: '',
  });

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const USER_REGEX = /^[A-Z]{3-20}$/;
  const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;
  const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const navigate = useNavigate();
  const [createNewUser] = useCreateUserMutation();

  const PageDisplay = () => {
    if (page === 0) {
      return <Registration />;
    } else if (page === 1) {
      return <RegistrationDetails />;
    }
  };
  const conditionalComponent = () => {
    switch (page) {
      case 1:
        return <AuthForm />;

      case 2:
        return <RegistrationDetails />;

      default:
        return <AuthForm />;
    }
  };

  // const createUser = async () => {
  //   const newUser = { email, password };
  //   const { data } = await createNewUser(newUser);
  //   console.log(data);
  //   createNewUser(newUser);
  // };

  const handleSubmit = async event => {
    event.preventDefault();
    // if (confirmedPassword !== password) {
    //   setConfirmedPassword('');
    //   return 'Passwords do not match!';
    // } else {
    //   createUser();
    //   // navigate(`/auth/register`, { replace: true });
    // }
    setPage(page + 1);
  };

  return (
    <>
      <Section>
        <ImageContainer>
          <Container>
            <Title>Registration</Title>
            <Form>
              {conditionalComponent()}
              <Button onClick={handleSubmit}>
                {page === 0 || page === 1 ? 'Next' : 'Register'}
              </Button>
              <P>
                Already have an account?
                {/* <Link to={`/login`} state={{ from: location }}> */}
                <Span>Login </Span>
                {/* </Link> */}
              </P>
            </Form>
          </Container>
        </ImageContainer>
      </Section>
    </>
  );
};

export default Registration;

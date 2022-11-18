import { useRegisterUserMutation } from '../../redux/auth/authOperations';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
import AuthForm from 'components/AuthForm';
import {
  Title,
  Container,
  Form,
  Button,
  P,
  Span,
  ImageContainer,
  Section,
  BackBtn,
} from './RegisterPage.styled';

const Registration = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [confirmedPassword] = useState('');
  const [page, setPage] = useState(0);

  // const USER_REGEX = /^[A-Z]{3-20}$/;
  // const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;
  // const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  // const navigate = useNavigate();
  const [registerNewUser] = useRegisterUserMutation();

  const conditionalComponent = () => {
    switch (page) {
      // case 0:
      //   return <AuthForm formData={formData} setFormData={setFormData} />;

      case 1:
        return (
          <RegistrationDetails formData={formData} setFormData={setFormData} />
        );

      default:
        return <AuthForm formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // if (confirmedPassword !== formData.password) {
    //   return alert('Passwords do not match!');
    // }
    if (page < 1) {
      setPage(page + 1);
    } else if (page === 1) {
      registerNewUser(formData);
      // navigate(`/user`, { replace: true });
    }
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
                {page === 0 || page < 1 ? 'Next' : 'Register'}
              </Button>
              {page > 0 && (
                <BackBtn onClick={() => setPage(page - 1)}>Back</BackBtn>
              )}
              <P>
                Already have an account?
                <Link to={`/login`} state={{ from: location }}>
                  <Span>Login </Span>
                </Link>
              </P>
            </Form>
          </Container>
        </ImageContainer>
      </Section>
    </>
  );
};

export default Registration;

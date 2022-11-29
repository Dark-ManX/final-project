import { useRegisterUserMutation } from '../../redux/auth/authOperations';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    name: 'Name',
    city: 'City, region',
    phone: '+380950786574',
    // confirmedPassword: '',
  });

  const [page, setPage] = useState(0);

  const navigate = useNavigate();
  const [registerNewUser] = useRegisterUserMutation();

  const conditionalComponent = () => {
    switch (page) {
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
      navigate(`/user`, { replace: true });
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

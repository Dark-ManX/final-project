import RegistrationDetails from 'components/Auth/RegistrationDetails/RegistrationDetails';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import { Link, useLocation } from 'react-router-dom';
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

const RegisterPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    city: '',
    phone: '',
  });
  const [page, setPage] = useState(0);

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

    if (formData.email === '' || !formData.email.includes('@')) {
      return alert('Please, enter a valid email!');
    }
    if (formData.password === '' || formData.password.includes(' ')) {
      return alert('Please, enter a valid password!');
    }
    if (page < 1) {
      setPage(page + 1);
    } else if (page === 1) {
      registerNewUser(formData);
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
                  <Span>Login</Span>
                </Link>
              </P>
            </Form>
          </Container>
        </ImageContainer>
      </Section>
    </>
  );
};

export default RegisterPage;

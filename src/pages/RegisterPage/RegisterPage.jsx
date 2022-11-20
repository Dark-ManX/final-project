import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import { Link, useLocation } from 'react-router-dom';
import AuthForm from 'components/AuthForm';
import {
  Title,
  FirstContainer,
  Container,
  Form,
  Button,
  P,
  Span,
  ImageContainer,
  Section,
  BackBtn,
} from './RegisterPage.styled';
import Notiflix from 'notiflix';

const RegisterPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: 'Name',
    city: 'City,region',
    phone: '380000000000',
    confirmedPassword: '',
  });
  const [page, setPage] = useState(0);

  const [confirmedPassword] = useState('');
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
      return Notiflix.Notify.failure('Please, enter a valid email!');
    }

    if (formData.password === '' || formData.password.includes(' ')) {
      return Notiflix.Notify.failure(
        'Please, enter a valid password without spaces!'
      );
    }

    if (
      formData.confirmedPassword !== formData.password ||
      formData.confirmedPassword === ''
    ) {
      return Notiflix.Notify.failure('Passwords do not match!');
    }
    if (!/^[a-zA-Z]*$/g.test(formData.name)) {
      return Notiflix.Notify.info('Name may only include letters');
    }
    if (formData.name === '') {
      return Notiflix.Notify.failure('Please, enter your name');
    }

    if (formData.city === '') {
      return Notiflix.Notify.failure('Please, enter your city and region');
    }
    if (!/^[a-zA-Z]+,[a-zA-Z]/g.test(formData.city)) {
      return Notiflix.Notify.info(
        'Please, enter your city and region separated by comma'
      );
    }
    if (formData.phone === '') {
      return Notiflix.Notify.failure('Please, enter your phone number');
    }
    if (!/^\d{12}$/g.test(formData.phone)) {
      return Notiflix.Notify.info(
        'Your phone number must consist of 12 numbers'
      );
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
          {page === 0 && (
            <FirstContainer>
              <Title>Registration</Title>

              <Form>
                {conditionalComponent()}
                <ul>
                  <li>
                    <Button onClick={handleSubmit}>
                      {page === 0 || page < 1 ? 'Next' : 'Register'}
                    </Button>
                  </li>

                  {page > 0 && (
                    <li>
                      <BackBtn onClick={() => setPage(page - 1)}>Back</BackBtn>
                    </li>
                  )}
                  <li>
                    <P>
                      Already have an account?
                      <Link to={`/login`} state={{ from: location }}>
                        <Span>Login </Span>
                      </Link>
                    </P>
                  </li>
                </ul>
              </Form>
            </FirstContainer>
          )}
          {page > 0 && (
            <Container>
              <Title>Registration</Title>

              <Form>
                {conditionalComponent()}
                <ul>
                  <li>
                    <Button onClick={handleSubmit}>
                      {page === 0 || page < 1 ? 'Next' : 'Register'}
                    </Button>
                  </li>
                  {page > 0 && (
                    <li>
                      <BackBtn onClick={() => setPage(page - 1)}>Back</BackBtn>
                    </li>
                  )}
                  <li>
                    <P>
                      Already have an account?
                      <Link to={`/login`} state={{ from: location }}>
                        <Span>Login </Span>
                      </Link>
                    </P>
                  </li>
                </ul>
              </Form>
            </Container>
          )}
        </ImageContainer>
      </Section>
    </>
  );
};

export default RegisterPage;

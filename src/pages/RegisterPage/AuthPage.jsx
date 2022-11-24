// import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useRegisterUserMutation } from 'redux/auth/authOperations';
// import { Link, useLocation ,useNavigate} from 'react-router-dom';
// import AuthForm from 'components/AuthForm';
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
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const RegisterPage = () => {

 
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

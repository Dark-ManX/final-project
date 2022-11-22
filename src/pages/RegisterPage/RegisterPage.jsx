import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRegisterUserMutation } from 'redux/auth/authOperations';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
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
   const navigate = useNavigate();
  const location = useLocation();
  const [formData1, setFormData1] = useState({
    email: '',
    password: '',
    confirmedPassword: '',
  });
    const [formData2, setFormData2] = useState({

    name: 'Name',
    city: 'City,region',
    phone: '380000000000',

  });
  const isId = useSelector(state => state.auth.user.id);
  console.log(isId)
  const [page, setPage] = useState(0);

  const [registerNewUser] = useRegisterUserMutation();

  const conditionalComponent = () => {
    switch (page) {
      case 1:
        return (
          <RegistrationDetails formData={formData2} setFormData={setFormData2} />
        );

      default:
        return <AuthForm formData={formData1} setFormData={setFormData1} />;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (formData1.email === '' || !formData1.email.includes('@')) {
      return Notiflix.Notify.failure('Please, enter a valid email!');
    }

    if (formData1.password === '' || formData1.password.includes(' ')) {
      return Notiflix.Notify.failure(
        'Please, enter a valid password without spaces!'
      );
    }

    if (
      formData1.confirmedPassword !== formData1.password ||
      formData1.confirmedPassword === ''
    ) {
      return Notiflix.Notify.failure('Passwords do not match!');
    }
    if (!/^[a-zA-Z]*$/g.test(formData2.name)) {
      return Notiflix.Notify.info('Name may only include letters');
    }
    if (formData2.name === '') {
      return Notiflix.Notify.failure('Please, enter your name');
    }

    if (formData2.city === '') {
      return Notiflix.Notify.failure('Please, enter your city and region');
    }
    if (!/^[a-zA-Z]+,[a-zA-Z]/g.test(formData2.city)) {
      return Notiflix.Notify.info(
        'Please, enter your city and region separated by comma'
      );
    }
    if (formData2.phone === '') {
      return Notiflix.Notify.failure('Please, enter your phone number');
    }
    if (!/^\d{12}$/g.test(formData2.phone)) {
      return Notiflix.Notify.info(
        'Your phone number must consist of 12 numbers'
      );
    }
    const formData= {
      email:  formData1.email,
      password: formData1.password,
    }

   registerNewUser(formData).then(({ error }) => {

     if (error) {
        const newName = error.data.name;
        const errorPassword = error.data.message;
        if (newName && newName === 'MongoError') {
          return Notiflix.Notify.failure(`A user email  ${formData1.email} already exists`);
        }
       if (errorPassword) {

          return Notiflix.Notify.failure(`${errorPassword}`);
       }
      navigate('/contacts', { replace: true });
     }

   });;

    // if (page < 1) {
    //   setPage(page + 1);
    // } else if (page === 1) {
    //   registerNewUser(formData);
    // }
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

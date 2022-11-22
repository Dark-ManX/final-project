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
  Input,
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
   const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [page, setPage]=useState(false)
  const isId = useSelector(state => state.auth.user.id);
  console.log(isId)
console.log(email,password,confirmPassword)
 const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const [registerNewUser] = useRegisterUserMutation();
  // const isToken = useSelector(state => state.auth.token);


  // if (isToken !== null) {
  //   skip = false;
  // }
  // useCurrentUserQuery(nameI, { skip });

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const addUser = () => {
    const newUser = {
      email,
      password,
    };
    registerNewUser(newUser).then(({ error }) => {

      if (error) {
        const newName = error.data.name;
        const errorPassword = error.data.message;
        if (newName && newName === 'MongoError') {
          return Notify.failure(`A user email  ${email} already exists`);
        }
        if (errorPassword) {
          return Notify.failure(`${errorPassword}`);
        }
      }
      navigate('/contacts', { replace: true });
    });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (password !== confirmPassword || confirmPassword==='') {
return Notify.failure('Fatal confirm password');
    }
    if (email === '' || !email.includes('@')) {
      return Notify.failure('Please, enter a valid email!');
    }
    if (password === '' || password.includes(' ')) {
      return Notify.failure(
        'Please, enter a valid password without spaces!'
      );
    }
    // if (!/^[a-zA-Z]*$/g.test(formData2.name)) {
    //   return Notiflix.Notify.info('Name may only include letters');
    // }
    // if (formData2.name === '') {
    //   return Notiflix.Notify.failure('Please, enter your name');
    // }

    // if (formData2.city === '') {
    //   return Notiflix.Notify.failure('Please, enter your city and region');
    // }
    // if (!/^[a-zA-Z]+,[a-zA-Z]/g.test(formData2.city)) {
    //   return Notiflix.Notify.info(
    //     'Please, enter your city and region separated by comma'
    //   );
    // }
    // if (formData2.phone === '') {
    //   return Notiflix.Notify.failure('Please, enter your phone number');
    // }
    // if (!/^\d{12}$/g.test(formData2.phone)) {
    //   return Notiflix.Notify.info(
    //     'Your phone number must consist of 12 numbers'
    //   );
    // }
    addUser();
    setConfirmPassword('');
    setEmail('');
    setPassword('');
  };

  return (
    <>


              <Form>
<>
          <Input
        name="email"
        type="email"
        required
        onChange={ handelChange }
        value={email}
        placeholder="Email"
      />
      <div>
            <Input

          name="password"
          type={passwordShown ? 'text' : 'password'}
          onChange={ handelChange }
          value={password}
          placeholder="Password"
          pattern="[^\s]"
          minlength="7"
          maxlength="32"
          required
        />
        <i onClick={togglePassword}></i>
      </div>
          <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        onChange={handelChange }
        value={confirmPassword}
      />
    </>
                <ul>
                  <li>
                    <Button onClick={handleSubmit}>
                      Next
                    </Button>
                  </li>
{/*
                  {page > 0 && (
                    <li>
                      <BackBtn>Back</BackBtn>
                    </li>
                  )} */}
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
            {/* </FirstContainer>
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
      </Section> */}
    </>
  );
};

export default RegisterPage;

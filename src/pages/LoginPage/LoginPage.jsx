import { useState } from 'react';
import { useLoginUserMutation } from 'redux/auth/authOperations';
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
  EyeContainer,
  EyeSymbol,
} from './LoginPage.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import Notiflix from 'notiflix';

const LoginPage = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoggedIn }] = useLoginUserMutation(); // To Hide/Show password
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

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

  const loginNewUser = () => {
    const newUser = {
      email,
      password,
    };
    loginUser(newUser);
    navigate('/user', { replace: true });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email === '' || !email.includes('@')) {
      return Notiflix.Notify.failure('Please, enter a valid email!');
    }

    if (password === '' || password.includes(' ')) {
      return Notiflix.Notify.failure(
        'Please, enter a valid password without spaces!'
      );
    }

    loginNewUser();

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Section>
        <ImageContainer>
          <Container>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <EyeContainer>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  minlength="7"
                  maxlength="32"
                />
                <EyeSymbol
                  onClick={() => setshowPassword(prevState => !prevState)}
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </EyeSymbol>
              </EyeContainer>

              <Button type="submit">Login</Button>
              <P>
                Don`t have an account?`
                <Link to={`/register`} state={{ from: location }}>
                  <Span> Register</Span>
                </Link>
              </P>
            </Form>
          </Container>
        </ImageContainer>
      </Section>
    </>
  );
};

export default LoginPage;

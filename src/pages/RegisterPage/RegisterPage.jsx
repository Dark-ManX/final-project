
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRegisterUserMutation ,useAddUserMutation} from 'redux/auth/authOperations';
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
  Input,
  EyeContainer,
  EyeSymbol,
} from './RegisterPage.styled';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { BsEyeSlash, BsEye } from 'react-icons/bs';


const RegisterPage = () => {
   const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [page, setPage] = useState(false)
  const isId = useSelector(state => state.auth.user.id);
 const [passwordShown, setPasswordShown] = useState(true);

const isId = useSelector(state => state.auth.user.id);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const [registerNewUser] = useRegisterUserMutation();

  const [addUser] = useAddUserMutation();
  // const isToken = useSelector(state => state.auth.token);


  // if (isToken !== null) {
  //   skip = false;
  // }
  // useCurrentUserQuery(nameI, { skip });

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'confirmPassword':
        setConfirmPassword(value);

  // To Hide/Show password
  const [showPassword, setshowPassword] = useState(false);
  // To Hide/Show confirm password
  const [showRePassword, setshowRePassword] = useState(false);

        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const createUser = () => {
    const newUser = {
      email,
      password,
    };
    registerNewUser(newUser).then(({ error }) => {

      if (error) {
        const errorPassword = error.data.message;
        if (error.status === 409) {
          navigate('/login', { replace: true });
          return Notify.failure(`A user email  ${email} already exists`);
        }
        if (errorPassword) {
          return Notify.failure(`${errorPassword}`);
        }
      }
      setPage(true)
      navigate('/register', { replace: true });
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
    createUser();

    setConfirmPassword('');
    setEmail('');
    setPassword('');
  };

const addUserInfo = async () => {
    const addInfoAuth = {
      name,
      city,
      phone,
      isId,
    };

   await addUser(addInfoAuth).then(({ error }) => {

      if (error) {
        console.log(error)
        const errorPassword = error.data.message;
        if (errorPassword) {
          return Notify.failure(`${errorPassword}`);
        }
      }
      navigate('/notices/sell', { replace: true });
    });
  };
  const handleSubmitInfo = evt => {
    evt.preventDefault();
    if (!/^[a-zA-Z]*$/g.test(name)) {
      return Notify.info('Name may only include letters');
    }
    if (name === '') {
      return Notify.failure('Please, enter your name');
    }

    if (city === '') {
      return Notify.failure('Please, enter your city and region');
    }
    if (!/^[a-zA-Z]+,[a-zA-Z]/g.test(city)) {
      return Notify.info(
        'Please, enter your city and region separated by comma'
      );
    }
    if (phone === '') {
      return Notify.failure('Please, enter your phone number');
    }
    if (!/^\d{12}$/g.test(phone)) {
      return Notify.info(
        'Your phone number must consist of 12 numbers'
      );
    }
    addUserInfo();
    setName('');
    setCity('');
    setPhone('');
  };

  return (
    <>
      <Section>
        <ImageContainer>
          <FirstContainer>
            <Title>Registration</Title>

            <Form>
              {!page ?        (<div>
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

              </div> ): (<div>
<>
          <Input
        name="name"
        type="name"
        required
        onChange={ handelChange }
        value={name}
        placeholder="Name"
      />
      <div>
            <Input

          name="city"
          type="text"
          onChange={ handelChange }
          value={city}
          placeholder="City"
        />
        <i onClick={togglePassword}></i>
      </div>
          <Input
        name="phone"
        type="phone"
        placeholder="Phone"
        onChange={handelChange }
        value={phone}
      />
    </>

              </div>)}


                <ul>
                <li>
                  {!page ? <Button onClick={handleSubmit}>
                      Next
                    </Button>:<Button onClick={handleSubmitInfo}>
                      Register
                    </Button>}

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

        </ImageContainer>
      </Section>
    </>
  );
};

export default RegisterPage;

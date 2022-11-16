import { useCreateUserMutation } from '../../redux/auth/a';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import RegistrationDetails from 'pages/RegisterPageDetails/RegisterPageDetails';
import {
  Input,
  Title,
  Container,
  Form,
  Button,
  P,
  Span,
} from './RegisterPage.styled';

const Registration = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [page, setPage] = useState(0);

  // const [username, setUsername] = useState('');
  // const [city, setCity] = useState('');
  // const [phone, setPhone] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // const [registerNewUser] = useRegisterUserMutation();
  const [createNewUser] = useCreateUserMutation();

  // const registrationDetails = { city, name, phone };
  const FormTitles = ['Sign Up', 'Personal Info', 'Other'];

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        // console.log(email);
        break;

      case 'password':
        setPassword(value);
        // console.log(password);
        break;

      // case 'name':
      //   setName(value);
      //   break;

      // case 'city':
      //   setCity(value);
      //   break;

      // case 'phone':
      //   setPhone(value);
      //   break;

      default:
        return;
    }
  };
  const PageDisplay = () => {
    if (page === 0) {
      return <Registration />;
    } else if (page === 1) {
      return <RegistrationDetails />;
    }
  };

  const createUser = async () => {
    const newUser = { email, password };
    const { data } = await createNewUser(newUser);
    console.log(data);
    const { id } = data.data.user;
    setUserId(id);
    console.log(id);
    return id;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const updatedUser = await createUser();
    setUserId(updatedUser);
    reset();
    // navigate(`/register/${updatedUser}`);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  // const handleRegisterSubmit = event => {
  //   event.preventDefault();
  //   result();
  //   resetRegister();
  // };

  // const resetRegister = () => {
  //   setName('');
  //   setCity('');
  //   setPhone('');
  // };

  useEffect(() => {}, [userId]);

  return (
    <>
      {!userId ? (
        <Container>
          <Title>Registration</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              onClick={() => {
                setPage(currPage => currPage + 1);
              }}
            >
              Next
            </Button>
            <P>
              Already have an account?{' '}
              <Link to={`/login`} state={{ from: location }}>
                <Span>Login </Span>
              </Link>
            </P>
          </Form>
        </Container>
      ) : (
        <RegistrationDetails details={userId} />
      )}
    </>
  );
};

export default Registration;

// const result = async () => {
//   try {
//     const fetchUser = await fetch(
//       `https://team-api-blended2.herokuapp.com/register/${userId}`,
//       {
//         method: 'PATCH',
//         body: { name, city, phone },
//         headers: { 'Content-Type': 'string' },
//       }
//     );
//     console.log(fetchUser);
//   } catch (error) {
//     console.log(error);
//   }

//   // try {
//   //   const data = await axios.patch(
//   //     `https://team-api-blended2.herokuapp.com/register/${userId}`,
//   //     registrationDetails
//   //   );
//   //   return data;
//   //   console.log(data);
//   // } catch (error) {
//   //   console.log(error.message);
//   // }
// };

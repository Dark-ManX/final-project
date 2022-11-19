import RegistrationDetails from 'components/Auth/RegistrationDetails/RegistrationDetails';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  const navigate = useNavigate();

  const [createNewUser] = useCreateUserMutation();

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
  
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {navigate(`/register/${userId}`)}, [userId]);

  return (
    <>
      {!userId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />

          <button type="submit">
            Submit
          </button>
        </form>
      ) : (
        <RegistrationDetails details={userId} />
      )}
    </>
  );
};

export default RegisterPage;

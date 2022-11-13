import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useCreateUserMutation } from 'redux/auth/authOperations';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewUser] = useCreateUserMutation();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        console.log(email);
        break;

      case 'password':
        setPassword(value);
        console.log(password);
        break;

      default:
        return;
    }
  };
  const createUser = () => {
    const newUser = {
      email,
      password,
    };
    createNewUser(newUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createUser();

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Registration;

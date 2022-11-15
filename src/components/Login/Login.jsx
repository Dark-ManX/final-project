import { useState } from 'react';
import { useLoginUserMutation } from 'redux/auth/authOperations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();

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
  };

  const handleSubmit = event => {
    event.preventDefault();
    loginNewUser();
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
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import authOperations from '../../redux/auth/authOperations';
import css from '../SignIn/SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form>
        <input type="input" placeholder="email" onChange={handleChange} />
        <input type="input" placeholder="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

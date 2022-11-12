import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/auth/authAPI';

const RegisterPage = () => {

    const [registerUser] = useRegisterUserMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
            setEmail(value);
            console.log(email);
        break;

      case 'password':
            setPassword(value);
            console.log(value)
        break;

      default:
        return;
    }
    };
    
  const handleSubmit = async(event) => {
    event.preventDefault();

      await registerUser({ email, password });

    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
    
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder="email" onChange={handleChange} />
        <input type="password" name='password' placeholder="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterPage;
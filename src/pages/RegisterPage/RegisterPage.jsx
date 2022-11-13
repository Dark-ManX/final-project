import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/auth/authAPI';

const RegisterPage = () => {

  const [registerUser] = useRegisterUserMutation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const res = password === confirmedPassword
  console.log(res)
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
            setEmail(value);
        break;

      case 'password':
            setPassword(value);
        break;
      
      case 'confirm':
        setConfirmedPassword(value);
        break;

      default:
        return;
    }
    };
    
  const handleSubmit = async(event) => {
    event.preventDefault();

      const result = await registerUser({ email, password });
console.log(result);

    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
    
  return (
    <>
      <p>Registration</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder="Email" onChange={handleChange} />
        <input type="password" name='password' placeholder="Password" onChange={handleChange} />
        <input type='password' name='confirm' placeholder='Confirm password' onChange={handleChange} />
        <button type="submit" disabled={(password === '') || (password !== confirmedPassword)}>Next</button>
      </form>
    </>
  );
};

export default RegisterPage;
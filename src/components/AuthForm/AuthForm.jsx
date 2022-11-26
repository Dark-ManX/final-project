import { Input, EyeSymbol, EyeContainer } from './AuthForm.styled';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const AuthForm = ({ handleChange, email, password, confirmedPassword }) => {
  // To Hide/Show password
  const [showPassword, setshowPassword] = useState(false);
  // To Hide/Show confirm password
  const [showRePassword, setshowRePassword] = useState(false);

const AuthForm = ({ formData, setFormData }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div>
        <Input
          type="email"
          required
          onChange={handleChange}
          value={email}
          placeholder="Email"
        />
      </div>
      <EyeContainer>
        <Input
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          value={password}
          placeholder="Password"
          pattern="[^\s]"
          minlength="7"
          maxlength="32"
          required
        />
        <EyeSymbol onClick={() => setshowPassword(prevState => !prevState)}>
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>
      </EyeContainer>
      <EyeContainer>
        <Input
          type={showRePassword ? 'text' : 'password'}
          placeholder="Confirm password"
          // onChange={handleChange}
          value={confirmedPassword}
        />
        <EyeSymbol onClick={() => setshowRePassword(prevState => !prevState)}>
          {showRePassword ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>
      </EyeContainer>
    </>
  );
};

export default AuthForm;

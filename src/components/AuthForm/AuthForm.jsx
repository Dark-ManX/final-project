import { Input, EyeSymbol, EyeContainer } from './AuthForm.styled';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const AuthForm = ({ formData, setFormData }) => {
  console.log(formData);
  // To Hide/Show password
  const [showPassword, setshowPassword] = useState(false);
  // To Hide/Show confirm password
  const [showRePassword, setshowRePassword] = useState(false);

  return (
    <>
      <div>
        <Input
          type="email"
          required
          onChange={e => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          value={formData.email}
          placeholder="Email"
        />
      </div>
      <EyeContainer>
        <Input
          type={showPassword ? 'text' : 'password'}
          onChange={e => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
          value={formData.password}
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
          onChange={e => {
            setFormData({
              ...formData,
              confirmedPassword: e.target.value,
            });
          }}
          value={formData.confirmedPassword}
        />
        <EyeSymbol onClick={() => setshowRePassword(prevState => !prevState)}>
          {showRePassword ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>
      </EyeContainer>
    </>
  );
};

export default AuthForm;

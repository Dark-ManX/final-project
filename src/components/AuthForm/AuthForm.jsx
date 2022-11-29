import { Input } from './AuthForm.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { EyeSymbol, EyeContainer } from './AuthForm.styled';

const AuthForm = ({ formData, setFormData }) => {
  // To Hide/Show password
  const [showPassword, setshowPassword] = useState(false);
  // To Hide/Show confirm password
  const [showRePassword, setshowRePassword] = useState(false);

  return (
    <>
      <Input
        type="email"
        onChange={e => {
          setFormData({
            ...formData,
            email: e.target.value,
          });
        }}
        value={formData.email}
        placeholder="Email"
        required
      />
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
          required
        />
        <EyeSymbol onClick={() => setshowPassword(prevState => !prevState)}>
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>
      </EyeContainer>
      <EyeContainer>
        <Input
          type={showPassword ? 'text' : 'password'}
          onChange={e => {
            setFormData({
              ...formData,
              confirmedPassword: e.target.value,
            });
          }}
          value={formData.confirmedPassword}
          placeholder="Confirm password"
          required
        />
        <EyeSymbol onClick={() => setshowPassword(prevState => !prevState)}>
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </EyeSymbol>
      </EyeContainer>
    </>
  );
};

export default AuthForm;

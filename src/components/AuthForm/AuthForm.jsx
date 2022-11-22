import { Input } from './AuthForm.styled';
import { useState } from 'react';

const AuthForm = ({ formData, setFormData }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <>
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
      <div>
        <Input
          type={passwordShown ? 'text' : 'password'}
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
        <i onClick={togglePassword}></i>
      </div>
      <Input
        type="password"
        placeholder="Confirm password"
        onChange={e => {
          setFormData({
            ...formData,
            confirmedPassword: e.target.value,
          });
        }}
        value={formData.confirmedPassword}
      />
    </>
  );
};

export default AuthForm;

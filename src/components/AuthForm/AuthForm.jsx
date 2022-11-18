import { Input } from './AuthForm.styled';

const AuthForm = ({ formData, setFormData }) => {
  console.log(formData);
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
      <Input
        type="password"
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
      <Input type="Confirmed password" placeholder="Confirm password" />
    </>
  );
};

export default AuthForm;

import { Input } from './AuthForm.styled';

const AuthForm = ({ formData, setFormData }) => {
  console.log(formData);
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
        pattern="[^\s]"
        minlength="7"
        maxlength="32"
        required
      />
      <Input
        type="Confirmed password"
        placeholder="Confirm password"
        // onChange={e => {
        //   setFormData({
        //     ...formData,
        //     confirmedPassword: e.target.value,
        //   });
        // }}
        // value={formData.ConfirmedPassword}
      />
    </>
  );
};

export default AuthForm;

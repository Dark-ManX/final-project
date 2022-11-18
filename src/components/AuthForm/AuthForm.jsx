import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
  Input,
  Title,
  Container,
  Form,
  Button,
  P,
  Span,
  ImageContainer,
  Section,
} from './AuthForm.styled';

const AuthForm = () => {
  return (
    <>
      <Input
        type="email"
        //   name="email"
        //   value={email}
        placeholder="Email"
        //   onChange={handleChange}
        required
      />
      <Input
        type="password"
        //   name="password"
        //   value={password}
        placeholder="Password"
        //   onChange={handleChange}
        required
      />
      <Input
        type="Confirmed password"
        //   name="confirmedPassword"
        //   value={confirmedPassword}
        placeholder="Confirm password"
        required
      />
    </>
  );
};

export default AuthForm;

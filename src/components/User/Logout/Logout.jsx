import { useState } from 'react';
import logout from 'icons/logout.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LogoutBtn } from './Logout.styled';
import { useLogOutUserMutation } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const [logoutUser] = useLogOutUserMutation();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      localStorage.removeItem('token');
      const res = await logoutUser();
      if (res) {
        navigate('/', { replace: true });
      }
    } catch (err) {
      Notify.failure(err.message);
    }
  };

  return (
    <LogoutBtn type="button" onClick={handleLogOut}>
      <img src={logout} alt="logout" />
      Log Out
    </LogoutBtn>
  );
};

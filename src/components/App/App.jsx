import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from '../Registration/Registration';
import RegistrationDetails from 'components/RegistrationDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// const AsyncHeader = lazy(() => import('../Header/Header'));
// const AsyncMainPage = lazy(() => import('../../pages/MainPage'))
// const NotFound = lazy(() => import('../../pages/NotFound'))

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/register/:id" element={<RegistrationDetails />} />

      {/* <Route index element={<AsyncMainPage />} /> */}

      {/* <Route path='*' element={<NotFound/>} />   */}
    </Routes>
  );
};

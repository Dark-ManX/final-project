import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const AsyncHeader = lazy(() => import('../Header/Header'));
const AsyncMainPage = lazy(() => import('../../pages/MainPage'))
const NotFound = lazy(() => import('../../pages/NotFound'))

export const App = () => {
  return (

    <Routes>
      <Route path='/' element={<AsyncHeader />} />
      <Route index element={<AsyncMainPage />} />
      
      <Route path='*' element={<NotFound/>} />  
    </Routes>
  );
};

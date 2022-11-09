// import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from 'pages/MainPage/MainPage';

// const AsyncHeader = lazy(() => import('../Header/Header'));
// const NotFound = lazy(() => import('../../pages/NotFound'))

export const App = () => {
  return (

    <Routes>
      {/* <Route path='/' element={<AsyncHeader />} /> */}
      <Route path='/' element={<MainPage/>} />
      
      {/* <Route path='*' element={<NotFound/>} />   */}
    </Routes>
  );
};

export default App;

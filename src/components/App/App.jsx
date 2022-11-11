import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from 'components/Header/Header';

const AsyncMainPage = lazy(() => import('pages/MainPage/MainPage'));
const AsyncNewsPage = lazy(() => import('pages/NewsPages/NewsPages'));
const AsyncNoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const AsyncNoticesSearch = lazy(() => import('components/NoticesSearch/NoticesSearch'));
const AsyncNoticesCategoryList = lazy(() => import('components/NoticesCategoryList/NoticesCategoryList'));
const AsyncRegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AsyncLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AsyncUserPage = lazy(() => import('pages/UserPage/UserPage'));
const AsyncOurFriendsPage = lazy(() => import('pages/OurFriendsPage/OurFriendsPage'));
const NotFound = lazy(() => import('pages/NotFound'));


const App = () => {
  return (

    <Routes>

      <Route path='/' element={<Header />} >
        <Route index element={<AsyncMainPage />} />

        <Route path='news' element={<AsyncNewsPage />} />

        <Route path='notices' element={<AsyncNoticesPage />}>
          
          <Route path='sell' element={<AsyncNoticesSearch />} />
          
          <Route path='lost-found' element={<AsyncNoticesCategoryList />} />
          
          <Route path='for-free' element={<AsyncNoticesCategoryList />} />
          
          <Route path='favorite' element={<AsyncNoticesCategoryList />} />
          
          <Route path='own' element={<AsyncNoticesCategoryList />} />
        </Route>

        <Route path='notices/:categoryName' element={<AsyncNoticesPage />} />
        
        <Route path='register' element={<AsyncRegisterPage />} />

        <Route path='login' element={<AsyncLoginPage />} />
        
        <Route path='user' element={<AsyncUserPage />} /> 

        <Route path='friends' element={<AsyncOurFriendsPage />} />
      </Route>
      
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
};

export default App;

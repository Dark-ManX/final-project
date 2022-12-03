import MainPage from 'components/MainPage/MainPage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const AsyncNewsPage = lazy(() => import('pages/NewsPages/NewsPages'));
const AsyncNoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const AsyncNoticesCategoryList = lazy(() =>
  import('components/Notices/NoticesCategoryList/NoticesCategoryList')
);
const AsyncRegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AsyncLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AsyncUserPage = lazy(() => import('pages/UserPage/UserPage'));
const AsyncOurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />

        <Route path="news" element={<AsyncNewsPage />} />

        <Route path="notices" element={<AsyncNoticesPage />}>
          <Route path=":path" element={<AsyncNoticesCategoryList />} />
          {/* 
          <Route path='sell' element={<AsyncSellNoticesPage />} />
          <Route path='for-free' element={<NoticesCategoryList />} />
          <Route path='lost-found' element={<AsyncLostFoundNoticesPage />} />
          <Route path='favorite' element={<AsyncFavoriteNoticesPage />} />
          <Route path='own' element={<AsyncOwnNoticesPage />} /> */}
        </Route>

        <Route path="friends" element={<AsyncOurFriendsPage />} />

        <Route path="register" element={<AsyncRegisterPage />} />
        <Route path="login" element={<AsyncLoginPage />} />
        {/* element={
          //   isLoggedIn ? <Navigate replace to="/user" /> :
          //     <AsyncLoginPage />
          // }
        // /> */}
        <Route path="user" element={<AsyncUserPage />} />

        <Route path="friends" element={<AsyncOurFriendsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

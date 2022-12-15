import MainPage from 'components/MainPage/MainPage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { lazy } from 'react';
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
const AsyncNotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />

        <Route path="news" element={<AsyncNewsPage />} />

        <Route path="notices" element={<AsyncNoticesPage />}>
          <Route path=":path" element={<AsyncNoticesCategoryList />} />
        </Route>

        <Route path="friends" element={<AsyncOurFriendsPage />} />

        <Route path="register" element={<AsyncRegisterPage />} />
        <Route path="login" element={<AsyncLoginPage />} />

        <Route path="user" element={<AsyncUserPage />} />

        <Route path="*" element={<AsyncNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

import { MainContainer } from 'components/commonStyles/Container.styled';
import Header from 'components/Header/Header/Header';
import { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { response } from 'api';

const SharedLayout = () => {
  const [isActual, setIsActual] = useState(false);

  const firstLoad = true;

  const token = useSelector(state => state.auth.token);

  const { getUser } = response;

  useEffect(() => {
    const fetchUser = async token => {
      try {
        await getUser(token);
        setIsActual(true);
      } catch (err) {
        console.log(err.message);
        setIsActual(false);
      }
    };

    fetchUser(token);
  }, [getUser, token]);

  return (
    <>
      <MainContainer>
        <Header state={isActual} load={firstLoad} />
      </MainContainer>

      <Suspense>
        <Outlet context={{ isActual, firstLoad }} />
      </Suspense>
    </>
  );
};

export default SharedLayout;

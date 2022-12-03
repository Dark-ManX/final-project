import { MainContainer } from 'components/commonStyles/Container.styled';
import Header from 'components/Header/Header/Header';
import { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { response } from 'api';

const SharedLayout = () => {
  const [isActual, setIsActual] = useState(false);

  const token = useSelector(state => state.auth.token);

  const { getUser } = response;

  const fetchUser = async token => {
    try {
      await getUser(token);
      setIsActual(true);
    } catch (err) {
      setIsActual(false);
    }
  };

  useEffect(() => {
    fetchUser(token);
  }, [token, isActual]);

  return (
    <>
      <MainContainer>
        <Header state={isActual} />
      </MainContainer>

      <Suspense>
        <Outlet context={isActual} />
      </Suspense>
    </>
  );
};

export default SharedLayout;

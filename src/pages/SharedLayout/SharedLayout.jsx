import { MainContainer } from 'components/commonStyles/Container.styled';
import Header from 'components/Header/Header/Header';
import { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { response } from 'api';

const SharedLayout = () => {
  const [isActual, setIsActual] = useState(false);

  const firstLoadCheck = () => {
    if (localStorage?.getItem('load')) {
      const storageData = localStorage.getItem('load');
      console.log('result', storageData);
      return JSON.parse(storageData);
    }
    return true;
  };

  const [firstLoad, setFirstLoad] = useState(firstLoadCheck());

  const token = useSelector(state => state.auth.token);

  const { getUser } = response;

  useEffect(() => {
    const fetchUser = async token => {
      try {
        await getUser(token);
        setIsActual(true);
      } catch (err) {
        setIsActual(false);
      }
    };

    const timedLoad = () => {
      setTimeout(() => {
        setFirstLoad(false);
        localStorage.setItem('load', JSON.stringify(firstLoad));
      }, 1250);
    };

    timedLoad();

    fetchUser(token);
  }, [firstLoad, getUser, isActual, token]);

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

import { MainContainer } from 'components/commonStyles/Container.styled';
import Header from 'components/Header/Header/Header';
import { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { response } from 'api';

const SharedLayout = () => {
  const [isActual, setIsActual] = useState(false);
  const [user, setUser] = useState(null);

  const firstLoad = true;

  const token = useSelector(state => state.auth.token);

  console.log(token);

  const { getUser } = response;

  useEffect(() => {
    const fetchUser = async token => {
      try {
        const res = await getUser(token);

        if (res) {
          setIsActual(true);
          setUser(res);
        }
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
        <Outlet context={{ isActual, firstLoad, user }} />
      </Suspense>
    </>
  );
};

export default SharedLayout;

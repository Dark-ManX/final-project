import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import Header from 'components/Header/Header';
import { MainContainer } from 'components/commonStyles/Container.styled';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />

      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default SharedLayout;

import { MainContainer } from "components/commonStyles/Container.styled";
import Header from "components/Header/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const SharedLayout = () => {
  
  return (
    <>
      <MainContainer>
        <Header />
      </MainContainer>
        
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

import MainContainer from "components/commonStyles/Container.styled";
import Header from "components/Header/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {

    return (

        <MainContainer>
            <Header/>

            <Suspense>
                <Outlet />
            </Suspense>
        </MainContainer>
    )
}

export default SharedLayout;
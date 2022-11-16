import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import Header from "components/Header/Header";
import { MainContainer } from "components/commonStyles/Container.styled";
import { SuspenseContainer } from "./SharedLayout.styled";

const SharedLayout = () => {

    return (

        <MainContainer>
            <Header/>

            <SuspenseContainer>
                <Suspense fallback={
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />}>
                    <Outlet />

                </Suspense>
            </SuspenseContainer>
        </MainContainer>
    )
}

export default SharedLayout;
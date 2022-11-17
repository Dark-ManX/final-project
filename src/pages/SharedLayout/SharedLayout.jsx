import MainContainer from "components/commonStyles/Container.styled";
import Header from "components/Header/Header";
import { RotatingLines } from 'react-loader-spinner';
import { Outlet } from "react-router-dom";
import { SuspenseContainer } from "./SharedLayout.styled";

const SharedLayout = () => {

    return (

        <MainContainer>
            <Header/>

                <SuspenseContainer fallback={
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />}>
                    <Outlet />

                </SuspenseContainer>
        </MainContainer>
    )
}

export default SharedLayout;
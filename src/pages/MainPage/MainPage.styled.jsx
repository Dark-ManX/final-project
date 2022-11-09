import styled from "styled-components";

export const MainContainer = styled.div`
max-width: 320px;
background-color: #F5F5F5;

@media screen and (min-width: 320px) and (max-width: 1279px) {
    max-width: 768px;
}

@media screen and (min-width: 1280px) {
    max-width: 1280px;
}
`
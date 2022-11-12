import styled from "styled-components";
import backWaves from 'img/Vector@2x.png';

export const MainPageSection = styled.section`
padding-top: 60px;
margin: 0 auto;
`

export const MainHeader = styled.p`
font-weight: bold;
font-size: 32px;
line-height: calc(44 / 32);

@media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
}
`

export const ImageContainer = styled.div`
width: 100%;
margin: 0 auto;
background-image: url(${backWaves});
background-position: left bottom;
`

export const Image = styled.img`
display: block;
width: 100%;
margin-top: 58px;
`

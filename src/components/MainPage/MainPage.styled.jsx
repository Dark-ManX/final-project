import styled from 'styled-components';
import mobileBack from 'img/Vector@2x.png';
import tabletBack from 'img/tabletBackground.png';
import desktopBack from 'img/desktopBack.png';
import desktopBack2 from 'img/desktopBack2.png';
import heart from 'img/heart.png';

export const MainPageSection = styled.div`
  padding-top: 60px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 92px;
  }
`;

export const MainHeader = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: calc(44 / 32);

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
  }
`;

export const ImageContainer = styled.div`
  width: 320px;
  height: 466px;
  margin: 0 auto;
  background-image: url(${mobileBack});
  background-size: cover;
  background-position: left bottom;
  background-repeat: no-repeat;
  transform: translateX(-20px);
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1045px;
    background-image: url(${tabletBack});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left bottom;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    left: -20px;
    width: 100vw;
    height: 655px;
    background-image: url(${desktopBack}), url(${desktopBack2}), url(${heart});
    background-size: 1120px 410px, 585px 410px, 92px 89px;
    background-position: left bottom, right bottom, 715px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-top: 58px;

  @media screen and (min-width: 768px) {
    width: 699px;
  }

  @media screen and (min-width: 1280px) {
    width: 624px;
    margin-left: auto;
  }
`;

export const Header = styled.h1`
  position: absolute;
  top: 60px;
  font-weight: bold;
  font-size: 32px;
  line-height: calc(44 / 32);
  width: 280px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
    width: 588px;
    top: 92px;
  }

  @media screen and (min-width: 1280px) {
    left: -100px;
    display: block;
    max-width: 588px;
  }
`;

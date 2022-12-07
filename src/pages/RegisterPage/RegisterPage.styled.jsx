import styled from 'styled-components';
import Waves from 'img/Waves.png';
import wavesPhone from 'img/wavesPhone.png';
import wavesTablet from 'img/wavesTablet.png';
import { MainContainer } from 'components/commonStyles/Container.styled';
import { Link } from 'react-router-dom';

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  background-position: bottom left;
  margin: 0 auto;
  background-image: url(${wavesPhone});
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 320px;
  padding-bottom: 103px;

  @media screen and (min-width: 768px) {
    background-position: bottom;
    background-image: url(${wavesTablet});
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 768px;
    height: 952px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${Waves});
    max-width: 1280px;
    height: 700px;
  }
`;

export const FirstContainer = styled.div`
  padding: 42px 0 103px;
  position: relative;

  @media screen and (min-width: 768px) {
    top: -300px;
    left: 100px;
    position: absolute;
    width: 608px;
    height: 517px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    top: 20px;
    left: 450px;
    width: 618px;
    height: 541px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    /* margin-bottom: 20px; */
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 36px;
    line-height: calc(49 / 36);
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 280px;
  height: 40px;
  background: #f59256;
  border-radius: 40px;
  border: none;
  font-family: 'Manrope';
  font-style: 500;
  align-items: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-top: 40px;
  background-color: #f59256;
  font-size: 20px;
  line-height: calc(27 / 20);

  &:disabled {
    background-color: #c2c2c2;
    color: #616161;
  }

  &.back {
    margin-top: 16px;
    color: #000000;
    background: #ffffff;
    border: 1px solid #f59256;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    line-height: 27px;
    font-weight: 500;
    font-size: 20px;
    width: 448px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
    height: 48px;
  }
`;

export const P = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  margin-top: 40px;
`;
export const Span = styled.span`
  color: rgba(48, 145, 235, 1);
  border-bottom: 1px solid rgba(48, 145, 235, 1);
  border-width: thin;
`;
export const BackBtn = styled.button`
  margin-bottom: 40px;
  color: #000000;
  width: 280px;
  height: 40px;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #f59256;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    visibility: visible;
    margin-bottom: 40px;
    color: #000000;
    width: 458px;
    height: 48px;
    background: #ffffff;
    border-radius: 40px;
    border: 1px solid #f59256;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 0.04em;
    color: #000000;
    line-height: 27px;
    font-weight: 500;
    font-size: 20px;
    width: 448px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
    height: 48px;
    margin-bottom: 20px;
  }
`;

export const InvalidInput = styled.input`
  background-color: #ffdddd;
`;
export const Eye = styled.img``;

export const EyeContainer = styled.div`
  position: relative;
`;

export const RegisterContainer = styled(MainContainer)`
  background-color: transparent;

  @media screen and (min-width: 768px) {
    padding-top: 169px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 46px;
  }
`;

export const Container = styled.div`
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 608px;
    background-color: white;
    border-radius: 40px;
    padding: 60px 80px 40px;
  }

  @media screen and (min-width: 1280px) {
    top: 46px;
    width: 618px;
    padding-bottom: 60px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration-line: underline;
`;

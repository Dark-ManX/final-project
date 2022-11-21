import styled from 'styled-components';
import Waves from 'img/Waves.png';
import wavesPhone from 'img/wavesPhone.png';
import wavesTablet from 'img/wavesTablet.png';

export const Section = styled.section`
  @media screen and (min-width: 768px) {
    position: relative;
  }
`;
export const ImageContainer = styled.div`
  background-position: bottom;
  position: absolute;
  top: 70px;
  left: 0px;
  background-image: url(${wavesPhone});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  min-height: 100vh;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    margin: 0 auto;
    position: absolute;
    top: 100px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-position: bottom;
    position: absolute;
    top: 400px;
    left: -152px;
    background-image: url(${wavesTablet});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100vw;
    min-height: 100vh;
  }
  @media screen and (min-width: 1280px) {
    background-position: bottom;
    position: absolute;
    top: 20px;
    left: -152px;
    background-image: url(${Waves});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100vw;
    min-height: 100vh;
  }
`;
export const Container = styled.div`
  margin-top: 30px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    top: -300px;
    left: 110px;
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
    height: 449px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    padding-top: 60px;
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;
export const Input = styled.input`
  width: 280px;
  height: 40px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  padding-left: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  // &:invalid {
  //   border: 1px solid red;
  // }
  @media screen and (min-width: 768px) {
    width: 448px;
    height: 52px;
    font-size: 18px;
    line-height: 25px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 426px;
    height: 52px;
  }
`;

export const Form = styled.form`
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
  font-style: normal;
  align-items: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: 24px;
  background-color: #f59256;
  font-size: 18px;
  line-height: 24px;

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
    margin-bottom: 20px;
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
  margin-top: 10px;
`;
export const Span = styled.span`
  color: rgba(48, 145, 235, 1);
  border-bottom: 1px solid rgba(48, 145, 235, 1);
  border-width: thin;
`;
export const BackBtn = styled.button`
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
    margin-bottom: 20px;
  }
`;

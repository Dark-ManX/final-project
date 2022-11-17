import styled from 'styled-components';
import Waves from '../../img/Waves.png';

export const Section = styled.section`
  @media screen and (min-width: 1280px) {
    position: relative;
  }
`;
export const ImageContainer = styled.div`
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
  @media screen and (min-width: 1280px) {
    position: absolute;
    width: 618px;
    height: 473px;
    top: 20px;
    left: 510px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    margin-bottom: 40px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
  }
`;
export const Input = styled.input`
  @media screen and (min-width: 1280px) {
    padding-left: 32px;
    margin-bottom: 16px;
    width: 426px;
    height: 52px;
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    justify-content: column;
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
    margin-bottom: 40px;
    width: 458px;
    height: 48px;
    background: #f59256;
    border-radius: 40px;
    border: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;

export const P = styled.p`
  @media screen and (min-width: 1280px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
`;
export const Span = styled.span`
  @media screen and (min-width: 1280px) {
    color: rgba(48, 145, 235, 1);
    border-bottom: 1px solid rgba(48, 145, 235, 1);
    border-width: thin;
  }
`;

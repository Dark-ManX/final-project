import styled from 'styled-components';

export const ContainerInfo = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: #000000;
  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerUser = styled.div`
  margin-top: 18px;
  margin-bottom: 46px;
  padding-bottom: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    position: relative;
    margin-top: 40px;
    padding: 24px 40px 24px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 411px;
    height: 535px;
    padding: 20px 16px 40px 16px;
    margin-right: 32px;
  }
`;

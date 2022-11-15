import styled from 'styled-components';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: #000000;
`;
export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
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
`;

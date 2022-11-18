import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  margin-bottom: 20px;
  padding: 16px 20px 40px 20px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 20px;
    border-radius: 40px;
  }
`;

export const Text = styled.p`
  padding-top: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-bottom: 12px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
    border-radius: 40px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 52%;
  left: 85%;
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    /* top: 20px;
    left: 640px; */
    top: 7%;
    left: 91%;
    padding: 10px;
    width: 44px;
    height: 44px;
    background: #fdf7f2;
    backdrop-filter: blur(2px);
  }

  @media screen and (min-width: 1280px) {
    left: 93%;
  }
`;

export const DeleteSvg = styled.img`
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

import styled from 'styled-components';

export const UserInfoList = styled.ul`
  margin: 38px 12px 44px 16px;

  @media screen and (min-width: 768px) {
    width: 379px;
    height: 192px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 379px;
    height: 192px;
    margin: 0;
  }
`;

export const UserInfoItem = styled.li`
  display: flex;
  margin-bottom: 12px;

  &:nth-child(5) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 15px;

    &:nth-child(5) {
      margin-bottom: 0;
    }
  }
`;

export const UserInfoData = styled.p`
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserInfoText = styled.p`
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
`;
export const UserInfoBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;

  margin-left: auto;
`;

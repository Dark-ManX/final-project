import styled from 'styled-components';

export const UserInfoList = styled.ul`
  margin: 23px 12px 44px 16px;

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
  order: 2;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 228px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
  }
`;

export const UserInfoText = styled.label`
  order: 1;
  flex: 0 0 auto;
  width: 82px;

  @media screen and (min-width: 768px) {
    width: 119px;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }

  @media screen and (min-width: 1280px) {
    width: 107px;
  }
`;

export const FormUpdate = styled.form`
  /* order: 2;
  width: 150px; */
`;
export const InputUpdate = styled.input`
  order: 2;
  width: 150px;

  /* width: 137px; */

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.04em;

  border: none;
  background-color: transparent;

  color: #111111;

  @media screen and (min-width: 768px) {
    width: 228px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
  }

  &:focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    padding: 4px 4px 4px 18px;
    font-size: 15px;
    line-height: 0;
  }

  &:focus-visible {
    border: 1px solid transparent;
  }
`;

export const UserInfoBtn = styled.button`
  order: 3;
  width: 20px;
  height: 20px;
  padding: 2px;
  border: none;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  cursor: pointer;

  margin-left: auto;
`;

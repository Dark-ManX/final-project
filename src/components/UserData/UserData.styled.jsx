import styled from 'styled-components';

export const UserInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0 0 0 52px;
  }
`;

export const ImgUser = styled.img`
  width: 233px;
  height: 233px;
  margin: 20px 24px 12px 23px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const EditPhotoBtn = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 170px;

  img {
    padding-right: 4px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 152px;
  }
`;

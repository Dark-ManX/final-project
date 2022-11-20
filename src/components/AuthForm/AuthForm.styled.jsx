import styled from 'styled-components';

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
export const InvalidInput = styled.input`
  background-color: #ffdddd;
`;

import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
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

   &:invalid {
    border: 1px solid red;
  }

  &:not(:first-child) {
    margin-top: 16px;
  }

  &.last {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 18px;
    line-height: 25px;
    padding-left: 32px;
  }

`;

export const EyeSymbol = styled.span`
  position: absolute;
  background: #fdf7f2;
  cursor: pointer;
  align-self: center;
  top: 68px;
  right: 14px;

  &.confirm {
    top: 124px;
    right: 14px;
  }

  @media screen and (min-width: 768px) {
    top: 87px;
    right: 25px;

    &.confirm {
      top: 155px;
      right: 25px;
    }
  }

  @media screen and (min-width: 1280px) {
    background: #fdf7f2;
    top: 86px;
    right: 25px;
  }
`;

export const Label = styled.label`
  position: relative;
`
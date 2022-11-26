import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  padding: 8px 28px;

  background: #FFFFFF;
  border: 2px solid #F59256;
  border-radius: 40px;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;

  &.active {
    color: #FFFFFF;
    background: #F59256;
  };

  @media screen and (min-width: 768px) {
    padding: 10px 28px;
  };  
`
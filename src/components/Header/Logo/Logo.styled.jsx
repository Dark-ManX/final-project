import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(48 / 32);
  }
`;

export const AccentSpan = styled.span`
  color: #f59256;
`;
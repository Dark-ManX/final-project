import styled from 'styled-components';

export const NavigationItem = styled.li`
  text-decoration: none;
  padding-top: 40px;
  &:first-child {
    padding-top: 0;
  }
`;
export const NavigationLink = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #181c27;
  transition-property: color, text-decoration-line, font-weight;
  transition-duration: 250ms, 250ms, 250ms;

  &:hover,
  &:focus {
    color: #f59256;
    text-decoration-line: underline;
    font-weight: 700;
  }
`;

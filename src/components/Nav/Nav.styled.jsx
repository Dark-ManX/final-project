import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationItem = styled.li`
  text-decoration: none;
  padding-top: 40px;
  &:first-child {
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: calc(44 / 32);
  letter-spacing: 0.04em;
  color: #181c27;
  transition-property: color, text-decoration-line;
  transition-duration: 250ms, 250ms;

    @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: calc(66 / 48);
  }

    @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }

  &:hover,
  &:focus {
    color: #f59256;
    text-decoration-line: underline;
    @keyframes textWeight {
      from {
        font-weight: 500;
      }
      to {
        font-weight: 700;
      }
    }
    animation: textWeight 250ms forwards;
  }
`
export const Navigation = styled.nav`
  text-align: center;
`

export const List = styled.ul`

  /* @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: calc(66 / 48);
  } */

  @media screen and (min-width: 1280px) {
    display: flex;
    column-gap: 80px;
}
`

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
  transform: scale(1);
  transition-property: color, text-decoration-line, transform;
  transition-duration: 250ms, 250ms, 250ms;

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
    transform: scale(1.1);
  }
`
export const Navigation = styled.nav`
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 88px 0 715px;
    position: absolute;
    background-color: #FDF7F2;
    top: 25px;
    right: -113px;
    width: 770px;
    height: 0;
    padding-top: 108px;
    opacity: 0;
    pointer-events: none;
    transform: scaleY(0.5);
    transform-origin: top;
    transition: transform 250ms linear, opacity 250ms linear;

    &.shown {
      transform: scaleY(1);
      opacity: 1;
      width: 768px;
      height: 110vh;
      visibility: visible;
      pointer-events: auto;
    }
  }

    @media screen and (min-width: 1280px) {
      position: static;
      padding: 0;
    }


`

export const List = styled.ul`

  @media screen and (min-width: 1280px) {
    display: flex;
    column-gap: 80px;
}
`

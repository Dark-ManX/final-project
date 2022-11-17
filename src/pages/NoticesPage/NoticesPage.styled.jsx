import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px;
  }
`;

export const Link = styled(NavLink)`
  text-align: center;
  padding: 8px 28px;
  margin-right: 12px;
  margin-bottom: 12px;
  text-decoration: none;

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

  @media screen and (max-width: 767px) {
    &:last-child {
      margin-bottom: 0;
    };

    &:nth-child(2n) {
      margin-right: 0;
    };
  };

  @media screen and (min-width: 768px) {
    &:nth-child(n) {
      margin-bottom: 0;
    };

    &:nth-child(3n) {
      margin-right: 0;
    };
  };
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  };

  @media screen and (min-width: 768px) {
    max-width: 383px;
    margin-bottom: 60px;
  };
`;
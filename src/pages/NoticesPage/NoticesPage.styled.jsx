import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  min-width: 320px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  margin-right: 12px;
  margin-bottom: 30px;
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
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 0;
`;
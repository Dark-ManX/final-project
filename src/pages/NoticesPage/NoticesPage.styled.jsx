import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-top: 42px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 92px;
  };

  @media screen and (min-width: 1280px) {
    padding-top: 70px;
    padding-bottom: 200px;
  };
`;

export const Title = styled.h2`
  margin-bottom: 28px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    text-align: center;
  };
`;

export const AuthLinkContainer = styled.div`
  display: flex;
`;

export const AuthLink = styled(Link)`
  &:first-child {
      margin-bottom: 0;
    };
`;

export const Nav = styled.nav`
  padding: 0;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  };

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  };

  @media screen and (min-width: 1280px) {
    display: flex;
  };
`;
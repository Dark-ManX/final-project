import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 42px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 92px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 70px;
    padding-bottom: 200px;
  } ;
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
  } ;
`;

export const AuthLinkContainer = styled.div`
  display: flex;
`;
export const Category = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
export const AuthLink = styled(NavLink)`
  text-align: center;
  padding: 10px 28px;
  margin-right: 12px;
  text-decoration: none;

  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }

  &.active {
    color: #ffffff;
    background: #f59256;
  }

  &:first-child {
    margin-bottom: 0;
  }
`;

export const Nav = styled.nav`
  position: relative;
  padding: 0;
  display: flex;
  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  } ;
`;

export const StyledErr = styled.p`
  font-size: 26px;
  line-height: 1.5;
`;

export const NavSection = styled.div`
  position: relative;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    margin-bottom: 60px;
  }
`;

export const LinkAddPet = styled(NavLink)`
  width: 44px;
  height: 44px;
  background: #f59256;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 240px;
    left: 200px;
    z-index: 100;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;
export const AddPet = styled.span`
  @media screen and (max-width: 767px) {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 12px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: #ffffff;
    position: absolute;
    width: 100%;
    top: 290px;
    left: 218px;
    z-index: 110;
  }
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: #111111;
    margin-left: auto;
    margin-right: 12px;
  }
`;
export const AddPetBlock = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: auto;
    align-items: center;
  }
`;
export const Icon = styled.span`
  @media screen and (max-width: 767px) {
    width: 23px;
    height: 23px;
    margin-top: -10px;
  }
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
    align-items: center;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

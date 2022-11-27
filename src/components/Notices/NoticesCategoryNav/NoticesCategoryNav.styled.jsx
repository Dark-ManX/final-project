import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  };

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    margin-right: 12px;
  };
`;

export const Link = styled(NavLink)`
  text-align: center;
  padding: 10px 28px;
  margin-right: 12px;
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

    @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }

  &.active {
    color: #FFFFFF;
    background: #F59256;
  };

  @media screen and (max-width: 767px) {
    &:first-child {
      margin-bottom: 12px;
    };

    &:last-child {
      margin-right: 0;
    };  
  };

  @media screen and (min-width: 768px) {
    padding: 10px 28px;

    &:last-child {
      margin-right: 0;
    }; 
  };
`;

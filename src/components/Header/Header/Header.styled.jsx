import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  
  @media screen and (min-width: 1280px) {
  column-gap: 80px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
position: absolute;
top: 100%;
left: -20px;
display: flex;
flex-direction: column-reverse;
justify-content: flex-end;
padding-top: 46px;
width: 320px;
height: 100%;
overflow: hidden;
background-color: #FDF7F2;
row-gap: 60px;
align-items: center;

@media screen and (max-width: 767px) {
transform: scaleY(0);
opacity: 0;
height: 543px;
transform-origin: top;
transition: transform 250ms linear, opacity 250ms linear;

&.shown {
transform: scaleY(1);
opacity: 1;
z-index: 10;
}
}

@media screen and (min-width: 768px) {
padding: 0;
position: relative;
overflow: visible;
height: auto;
width: 768px;
left: 0;
}

@media screen and (min-width: 1280px) {
position: relative;
flex-direction: row;
justify-content: flex-start;
height: auto;
width: 1280px;
}
`

export const AuthUserContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  /* width: 250px; */

@media screen and (min-width: 768px) {
  position: absolute;
  top: 0;
  right: 25px;
  transform: translateY(-50%);
  justify-content: center;
}

@media screen and (min-width: 1280px) {
  position: relative;
  display: flex;
  column-gap: 20px;
  right: 0;
  margin-left: auto;
  transform: translate(0);
}
`

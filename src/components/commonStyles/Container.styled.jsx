import styled from 'styled-components';

export const MainContainer = styled.div`
box-sizing: border-box;
background-color: #FDF7F2;
max-width: 320px;
padding: 0 20px;
margin: 0 auto;
/* height: 100vh; */

@media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 20px 16px 0;
}
`
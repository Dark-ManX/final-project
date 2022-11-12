import styled from "styled-components";

export const Gallery = styled.ul`
  list-style: none;
  margin-top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
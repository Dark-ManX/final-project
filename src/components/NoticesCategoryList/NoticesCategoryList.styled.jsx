import styled from "styled-components";

export const Gallery = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  };
`;
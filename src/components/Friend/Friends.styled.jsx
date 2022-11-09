import styled from "styled-components";

export const Container = styled.div`
padding: 12px 4px;
border-radius: 20px;
background-color: white;
`;

export const FriendsThumb = styled.div`
@media screen and (min-width: 321px) {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 32px));
}
`

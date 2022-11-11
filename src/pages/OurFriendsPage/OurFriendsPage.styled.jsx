import styled from "styled-components";

export const Container = styled.div`
display: flex;
column-gap: 12px;
padding: 12px 4px;
border-radius: 20px;
background-color: white;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

@media screen and (min-width: 320px) {
    border-radius: 40px;
}
`;

export const FriendsThumb = styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 12px;

@media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
}

@media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const FirstThumb = styled.div`
width: 110px;
`

export const Title = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: calc(33 / 24);
text-align: center;
margin-top: 47px;
`

import styled from "styled-components";

export const Container = styled.div`
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
font-weight: 500;
font-size: 12px;
line-height: calc(16 / 12);

@media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
}

@media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const CardThumb = styled.div`
display: flex;
column-gap: 12px;
margin-top: 12px;
`

export const FriendTitle = styled.h3`
text-align: center;
color: #F59256;
`

export const FirstThumb = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 110px;
`

export const SecondThumb = styled.div`
width: 150px;
`

export const Title = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: calc(33 / 24);
text-align: center;
margin-top: 47px;
`

export const Image = styled.img`
display: block;
width: 100%;
`

export const Item = styled.li`
color: #F59256;
`

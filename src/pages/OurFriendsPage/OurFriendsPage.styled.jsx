import styled from 'styled-components';

export const Container = styled.li`
  padding: 12px 4px 12px 4px;
  border-radius: 20px;
  background-color: white;
  color: black;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const FriendsThumb = styled.ul`
  margin: 40px 0 100px;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardThumb = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 12px;
  align-items: flex-start;
`;

export const FriendTitle = styled.h3`
  text-align: center;
  color: #f59256;
  display: block;
`;

export const FirstThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
`;

export const SecondThumb = styled.div`
  width: 150px;
  color: black;
`;

export const Title = styled.h2`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  color: black;
  margin-top: 47px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 94px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Item = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover > .time {
    color: teal;
    height: auto;
    opacity: 1;
  }
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const TimeContiner = styled.div`
  width: auto;
  padding: 12px;
  z-index: 10;
  position: absolute;
  top: 100%;
  background-color: white;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms linear;
`;

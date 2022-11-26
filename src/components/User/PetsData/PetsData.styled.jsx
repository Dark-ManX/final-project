import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const AddBtn = styled.button`
  margin-left: 15px;
  padding: 12px;
  width: 40px;
  height: 40px;
  background: #f59256;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

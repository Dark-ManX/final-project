import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: transparent;
  z-index: 1200;
  background-color: rgba(0, 0, 0, 0.5);

  .headerModal & {
    background-color: #fff;
  }
`;

export const ModalBody = styled.div`
  position: absolute;
  // width: 280px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45vh);
  background-color: white;
  border-radius: 25px;
  padding: 40px 20px 40px 20px;
  overflow: hidden;
`;

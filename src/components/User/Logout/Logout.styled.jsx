import styled from 'styled-components';

export const LogoutBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);

  display: flex;
  align-items: center;
  margin-left: 179px;
  padding: 0;

  img {
    padding-right: 8px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 85%;
    left: -21%;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 90%;
    left: -33%;
  }
`;

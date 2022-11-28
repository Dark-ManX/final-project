import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWhiteLink = styled(Link)`
  box-sizing: border-box;
  border: 2px solid #f59256;
  color: black;
  font-weight: 500;
  padding: 8px 28px;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;

`;

export const StyledColoredLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #f59256;
  color: white;
  font-weight: 500;
  padding: 8px 28px;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
`;

export const StyledSpan = styled.span`
  display: flex;
  margin-right: 12px;
  fill: #f59256;
`;

// export const UnregiteredUser = styled.div`
//   display: flex;
//   gap: 12px;
//   justify-content: center;
// `;

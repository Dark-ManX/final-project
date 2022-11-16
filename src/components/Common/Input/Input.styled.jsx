import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  // max-width: 100%;
`;

export const Input = styled.input`
  max-width: 100%;
  height: 40px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 8px;
  padding: 0px 14px;

  &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(27, 27, 27, 0.6);
  }
`;
export const Label = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

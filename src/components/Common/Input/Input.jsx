import React from 'react';
import * as Styled from './Input.styled';

export const Input = ({ label, ...inputProps }) => {
  return (
    <Styled.InputBox>
      {label ? <Styled.Label>{label}</Styled.Label> : null}
      <Styled.Input {...inputProps} />
    </Styled.InputBox>
  );
};

import React from 'react';
import * as Styled from './Button.styled';

const Button = ({ content, variant = 'primary', ...restProps }) => {
  return (
    <Styled.Button variant={variant} {...restProps}>
      {content}
    </Styled.Button>
  );
};

export default Button;

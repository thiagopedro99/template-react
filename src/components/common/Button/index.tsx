// src/components/common/Button/index.tsx
import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
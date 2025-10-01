// src/components/common/Container/index.tsx
import { StyledContainer } from './styles';
import { ContainerProps } from './types';



export const Container = ({ children, ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
// src/components/common/Flex/index.tsx
import { StyledFlex } from './styles';
import { FlexProps } from './types';


export const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
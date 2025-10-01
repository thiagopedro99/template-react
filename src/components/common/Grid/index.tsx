// src/components/common/Grid/index.tsx
import { StyledGrid } from './styles';
import { GridProps } from './types';


export const Grid = ({ children, ...props }: GridProps) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default Grid;
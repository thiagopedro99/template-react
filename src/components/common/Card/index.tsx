// src/components/common/Card/index.tsx
import { StyledCard } from './styles';
import { CardProps } from './types';


export const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
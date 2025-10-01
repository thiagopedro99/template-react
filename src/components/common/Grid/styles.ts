// src/components/common/Grid/styles.ts
import styled from 'styled-components';
import { GridProps } from './types';

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  gap: ${({ $gap, theme }) => $gap || theme.spacing.md};
  
  /* Se minColumnWidth for especificado, usa auto-fit */
  ${({ $minColumnWidth, $columns }) => 
    $minColumnWidth 
      ? `grid-template-columns: repeat(auto-fit, minmax(${$minColumnWidth}, 1fr));`
      : `grid-template-columns: repeat(${$columns || 1}, 1fr);`
  }
  
  /* Responsivo - uma coluna em telas pequenas */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;
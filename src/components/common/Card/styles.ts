// src/components/common/Card/styles.ts
import styled, { css } from 'styled-components';
import { CardProps } from './types';

export const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  /* Padding */
  padding: ${({ $padding, theme }) => $padding || theme.spacing.xl};
  
  /* Variant */
  ${({ $variant = 'default', theme }) => {
    const variants = {
      default: css`
        box-shadow: ${theme.shadows.md};
        
        &:hover {
          box-shadow: ${theme.shadows.lg};
        }
      `,
      elevated: css`
        box-shadow: ${theme.shadows.lg};
        
        &:hover {
          box-shadow: ${theme.shadows.xl};
          transform: translateY(-2px);
        }
      `,
      outlined: css`
        border: 1px solid ${theme.colors.border};
        box-shadow: none;
        
        &:hover {
          border-color: ${theme.colors.primary};
        }
      `,
    };
    return variants[$variant];
  }}
`;
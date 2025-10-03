// src/components/common/Button/styles.ts
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  border: 2px solid transparent;
  font-family: inherit;
  
  /* Size */
/* Size */
${({ $size = 'md', theme }) => {
    const sizes = {
      sm: css`
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: ${theme.fonts.sizes.sm};
    `,
      md: css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      font-size: ${theme.fonts.sizes.base};
    `,
      lg: css`
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      font-size: ${theme.fonts.sizes.lg};
    `,
    };
    return sizes[$size];
  }}

  /* Variant */
  ${({ $variant = 'primary', theme }) => {
    const variants = {
      primary: css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text.inverse};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primaryDark};
        }
      `,
      secondary: css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.text.inverse};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondaryDark};
        }
      `,
      outline: css`
        background-color: transparent;
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.inverse};
        }
      `,
      ghost: css`
        background-color: transparent;
        color: ${theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: rgba(107, 114, 128, 0.1);
        }
      `,
    };
    return variants[$variant];
  }}

  /* Full width */
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}

  /* Disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Focus */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
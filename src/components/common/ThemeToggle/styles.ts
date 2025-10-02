// src/components/common/ThemeToggle/styles.ts
import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Icon = styled.span<{ $isLight: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  ${ToggleButton}:hover & svg {
    transform: ${({ $isLight }) => $isLight ? 'rotate(20deg)' : 'rotate(-20deg)'};
  }
`;
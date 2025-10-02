// src/components/common/Loading/styles.ts
import styled, { keyframes } from 'styled-components';
import { LoadingSize } from './types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const SpinnerContainer = styled.div<{ $overlay: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  ${({ $overlay, theme }) =>
    $overlay &&
    `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${theme.zIndex.modal + 1};
  `}
`;

const sizeMap: Record<LoadingSize, string> = {
  xs: '16px',
  sm: '24px',
  md: '40px',
  lg: '56px',
  xl: '72px',
};

const borderSizeMap: Record<LoadingSize, string> = {
  xs: '2px',
  sm: '3px',
  md: '4px',
  lg: '5px',
  xl: '6px',
};

export const Spinner = styled.div<{ $size: LoadingSize; $color?: string }>`
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border: ${({ $size }) => borderSizeMap[$size]} solid
    ${({ theme }) => theme.colors.borderLight};
  border-top-color: ${({ $color, theme }) => $color || theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const InlineSpinner = styled(Spinner)`
  display: inline-block;
  vertical-align: middle;
`;

export const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin: 0;
`;
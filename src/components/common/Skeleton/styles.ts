import styled, { keyframes, css } from 'styled-components';
import { SkeletonProps } from './types';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const StyledSkeleton = styled.div<SkeletonProps>`
  background: ${({ theme }) => theme.colors.borderLight};
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.borderLight} 0px,
    ${({ theme }) => theme.colors.border} 40px,
    ${({ theme }) => theme.colors.borderLight} 80px
  );
  background-size: 468px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  
  ${({ variant = 'text', width, height }) => {
    if (variant === 'circular') {
      const size = width || height || '40px';
      return css`
        width: ${size};
        height: ${size};
        border-radius: 50%;
      `;
    }
    
    if (variant === 'rectangular') {
      return css`
        width: ${width || '100%'};
        height: ${height || '200px'};
        border-radius: ${({ theme }) => theme.borderRadius.md};
      `;
    }
    
    // text
    return css`
      width: ${width || '100%'};
      height: ${height || '1em'};
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    `;
  }}
`;
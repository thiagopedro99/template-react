// src/pages/home/styles.ts
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  text-align: center;
  margin: 0;
`;
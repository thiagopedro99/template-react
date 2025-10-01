// src/components/footer/styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  margin-top: auto;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    opacity: 0.8;
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.inverse};
  opacity: 0.9;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    width: 100%;
  }
`;
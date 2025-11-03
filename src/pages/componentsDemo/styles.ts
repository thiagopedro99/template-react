// src/pages/componentsDemo/styles.ts
import styled from 'styled-components';

export const DemoSection = styled.section`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ExampleItem = styled.div<{ $direction?: 'row' | 'column' }>`
  position: relative;
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'column'};
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: ${({ $direction }) => $direction === 'row' ? 'center' : 'flex-start'};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.borderLight};
  transition: all ${({ theme }) => theme.transitions.fast};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
    
    button {
      opacity: 1;
    }
  }

  /* O componente em si */
  > *:first-child {
    flex: 1;
  }

  /* Botão de código */
  > button:last-child {
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    > button:last-child {
      opacity: 1;
    }
  }
`;

export const ExampleLabel = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;
// src/components/layout/styles.ts
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
`;
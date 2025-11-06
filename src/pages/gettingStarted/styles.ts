// src/pages/gettingStarted/styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.colors.full};
  color: #d4d4d4;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;

  code {
    padding: 0;
    font-family: inherit;
  }

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.sm};

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  code {
    padding: 2px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
    font-size: 0.875rem;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
`;

export const StepContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  align-items: flex-start;

  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  code {
    background-color: ${({ theme }) => theme.colors.matte};
    padding: 2px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
    font-size: 0.875rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const StepNumber = styled.div`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  flex-shrink: 0;
`;

export const FolderTree = styled.div`
  background-color: ${({ theme }) => theme.colors.borderLight};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
`;

export const FolderItem = styled.div<{ $level: number }>`
  padding-left: ${({ $level }) => $level * 1.5}rem;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const InfoBox = styled.div`
  background-color: rgba(25, 118, 210, 0.1);
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const TokenSpan = styled.span<{ $type: string }>`
  ${({ $type }) => {
    switch ($type) {
      case 'comment':
        return `
          color: #6a9955;
          font-style: italic;
        `;
      case 'string':
        return `
          color: #ce9178;
        `;
      case 'keyword':
        return `
          color: #c586c0;
          font-weight: 500;
        `;
      case 'react':
        return `
          color: #4ec9b0;
          font-weight: 500;
        `;
      case 'function':
        return `
          color: #dcdcaa;
        `;
      case 'number':
        return `
          color: #b5cea8;
        `;
      case 'tag':
        return `
          color: #569cd6;
          font-weight: 500;
        `;
      case 'property':
        return `
          color: #9cdcfe;
        `;
      default:
        return `
          color: #d4d4d4;
        `;
    }
  }}
`;
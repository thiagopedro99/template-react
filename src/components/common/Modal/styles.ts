// src/components/common/Modal/styles.ts
import styled, { keyframes } from 'styled-components';
import { ModalSize } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 20px));
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: ${({ theme }) => theme.zIndex.backdrop};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} ${({ theme }) => theme.transitions.fast} both;
`;

const sizeMap: Record<ModalSize, string> = {
  sm: '400px',
  md: '600px',
  lg: '800px',
  xl: '1000px',
  full: '95vw',
};

export const ModalContainer = styled.div<{ $isOpen: boolean; $size: ModalSize }>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: ${({ $size }) => sizeMap[$size]};
  max-height: 90vh;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  animation: ${slideUp} ${({ theme }) => theme.transitions.normal} both;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 95%;
    max-height: 95vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderLight};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  flex: 1;
  color: ${({ theme }) => theme.colors.text.primary};

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.borderLight};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ModalFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
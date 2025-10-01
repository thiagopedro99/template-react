// src/components/navbar/styles.ts
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: ${({ theme }) => theme.zIndex.sticky};
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DesktopMenu = styled.nav`
  display: none;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const HamburgerIcon = styled.span`
  width: 24px;
  height: 2px;
  background-color: currentColor;
  position: relative;
  display: block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    left: 0;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity ${({ theme }) => theme.transitions.normal},
              visibility ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndex.backdrop};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CloseIcon = styled.span`
  width: 24px;
  height: 24px;
  position: relative;
  display: block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    top: 50%;
    left: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const MobileMenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
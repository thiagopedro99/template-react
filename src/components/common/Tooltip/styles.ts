// src/components/common/Tooltip/styles.ts
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover > span {  // Remove a linha &:focus-within
    opacity: 1;
    visibility: visible;
    animation: ${fadeIn} 0.2s ease forwards;
  }

  @media (hover: none) and (pointer: coarse) {
    & > span {
      display: none !important;
    }
  }

`;

export const TooltipText = styled.span<{ $position: "top" | "bottom" | "left" | "right" }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  ${({ $position }) =>
    $position === "top" &&
    css`
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 6px;
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    css`
      top: 125%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 6px;
    `}

  ${({ $position }) =>
    $position === "left" &&
    css`
      right: 125%;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 6px;
    `}

  ${({ $position }) =>
    $position === "right" &&
    css`
      left: 125%;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 6px;
    `}
`;

// src/components/toast/styles.ts
import styled, { css, keyframes } from 'styled-components';
import { ToastType } from './types';

const bounceInRight = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
`;

const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  top: 1em;
  right: 1em;
  width: 320px;
  max-height: calc(100vh - 2em);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  color: #fff;
  
  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  
  @media only screen and (max-width: 480px) {
    width: 100vw;
    padding: 0;
    left: 0;
    margin: 0;
    top: 0;
    right: 0;
  }
`;
interface ToastItemProps {
  $type: ToastType;
  $isExiting?: boolean;
}

export const ToastItem = styled.div<ToastItemProps>`
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  max-height: 800px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  direction: ltr;
  pointer-events: auto;
  
  animation: ${({ $isExiting }) =>
    $isExiting
      ? css`${bounceOutRight} 0.4s both`
      : css`${bounceInRight} 0.7s both`
  };

 ${({ $type }) => {
    const styles = {
      success: css`
      background-color: #2e7d32; 
    `,
      error: css`
      background-color: #d32f2f; 
    `,
      warning: css`
      background-color: #f57a16ff; 
    `,
      info: css`
      background-color: #0288d1; 
    `,
    };
    return styles[$type];
  }}
`;

export const ToastBody = styled.div`
  margin: auto 0;
  flex: 1 1 auto;
  padding: 6px;
  display: flex;
  align-items: center;
`;

export const ToastIcon = styled.div`
  margin-inline-end: 10px;
  width: 20px;
  flex-shrink: 0;
  display: flex;
  color: rgba(255, 255, 255, 0.9);
`;

export const ToastContent = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

export const ToastMessage = styled.div`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  white-space: pre-wrap;
  line-height: 1.5;
  color: #fff;
`;

export const CloseButton = styled.button`
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  align-self: flex-start;
  z-index: 1;
  
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const ProgressBar = styled.div<{
  $type: ToastType;
  $duration: number;
  $isPaused: boolean;
  $isRunning: boolean;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 9999;
  opacity: 0.7;
  background-color: rgba(255, 255, 255, 0.7);
  transform-origin: left;
  
  ${({ $isPaused, $duration, $isRunning }) => {
    if (!$isRunning) return '';
    if ($isPaused) {
      return css`
        animation-play-state: paused;
      `;
    }
    return css`
      animation: toastify-track-progress linear 1 forwards;
      animation-duration: ${$duration}ms;
      
      @keyframes toastify-track-progress {
        0% {
          transform: scaleX(1);
        }
        100% {
          transform: scaleX(0);
        }
      }
    `;
  }}
`;
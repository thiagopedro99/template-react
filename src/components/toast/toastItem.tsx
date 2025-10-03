// src/components/toast/ToastItem.tsx
import { useEffect, useState, useRef } from 'react';
import { Toast } from './types';
import {
  ToastItem as StyledToastItem,
  ToastBody,
  ToastIcon,
  ToastContent,
  ToastMessage,
  CloseButton,
  ProgressBar,
} from './styles';
import { AlertTriangle, Check, Info, X } from 'lucide-react';

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const Icons = {
  success: <Check size={20} />,
  error: <X size={20} />,
  warning: <AlertTriangle size={20} />,
  info: <Info size={20} />,
};

const ToastItemComponent = ({ toast, onRemove }: ToastItemProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    // Pequeno delay para a animação da barra começar
    setTimeout(() => setIsRunning(true), 0);

    const duration = toast.duration || 3000;

    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPaused, toast.id]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 400);
  };

  return (
    <StyledToastItem
      $type={toast.type}
      $isExiting={isExiting}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleClose}
    >
      <ToastBody>
        <ToastIcon>{Icons[toast.type]}</ToastIcon>
        <ToastContent>
          <ToastMessage>{toast.message}</ToastMessage>
        </ToastContent>
      </ToastBody>

      <CloseButton onClick={(e) => {
        e.stopPropagation();
        handleClose();
      }} aria-label="close">
        <svg height="14" viewBox="0 0 14 14" width="14">
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="currentColor"
          />
        </svg>
      </CloseButton>

      <ProgressBar
        $type={toast.type}
        $duration={toast.duration || 3000}
        $isPaused={isPaused}
        $isRunning={isRunning}
        key={isPaused ? 'paused' : 'running'}
      />
    </StyledToastItem>
  );
};

export default ToastItemComponent;
// src/components/common/Loading/index.tsx
import { createPortal } from 'react-dom';
import {
  SpinnerContainer,
  Spinner,
  Overlay,
  LoadingText,
  InlineSpinner,
} from './styles';
import { LoadingProps } from './types';

export const Loading = ({
  size = 'md',
  overlay = false,
  text,
  color,
}: LoadingProps) => {
  const content = (
    <>
      {overlay && <Overlay />}
      <SpinnerContainer $overlay={overlay}>
        <Spinner $size={size} $color={color} />
        {text && <LoadingText>{text}</LoadingText>}
      </SpinnerContainer>
    </>
  );

  if (overlay) {
    return createPortal(content, document.body);
  }

  return content;
};

// Spinner inline para usar dentro de botões ou textos
export const InlineLoading = ({
  size = 'sm',
  color,
}: {
  size?: 'xs' | 'sm' | 'md';
  color?: string;
}) => {
  return <InlineSpinner $size={size} $color={color} />;
};

export default Loading;
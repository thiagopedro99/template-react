// src/components/common/Loading/types.ts
export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface LoadingProps {
  size?: LoadingSize;
  overlay?: boolean;
  text?: string;
  color?: string;
}
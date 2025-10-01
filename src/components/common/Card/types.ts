import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  $variant?: 'default' | 'elevated' | 'outlined';
  $padding?: string;
}

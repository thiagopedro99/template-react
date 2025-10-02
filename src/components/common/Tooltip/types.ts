// src/components/common/Tooltip/types.ts
import { ReactNode } from "react";

export interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

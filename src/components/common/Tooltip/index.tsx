// src/components/common/Tooltip/index.tsx
import { TooltipWrapper, TooltipText } from "./styles";
import { TooltipProps } from "./types";

export const Tooltip = ({ text, children, position = "top" }: TooltipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText role="tooltip" $position={position}>
        {text}
      </TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;

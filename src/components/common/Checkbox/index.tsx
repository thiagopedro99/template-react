// src/components/common/Checkbox/index.tsx
import { forwardRef } from 'react';
import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  CheckIcon,
  Label,
} from './styles';
import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <CheckboxWrapper>
        <HiddenCheckbox ref={ref} {...props} />
        <StyledCheckbox $checked={!!props.checked} $disabled={!!props.disabled}>
          {props.checked && <CheckIcon />}
        </StyledCheckbox>
        {label && <Label $disabled={!!props.disabled}>{label}</Label>}
      </CheckboxWrapper>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
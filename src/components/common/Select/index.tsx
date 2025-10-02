// src/components/common/Select/index.tsx
import { forwardRef } from 'react';
import {
  SelectWrapper,
  SelectContainer,
  StyledSelect,
  Label,
  ErrorMessage,
  HelperText,
  SelectIcon,
} from './styles';
import { SelectProps } from './types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, placeholder, $fullWidth, ...props }, ref) => {
    const hasError = !!error;

    return (
      <SelectWrapper $fullWidth={$fullWidth}>
        {label && <Label htmlFor={props.id}>{label}</Label>}

        <SelectContainer >
          <StyledSelect
            ref={ref}
            $hasError={hasError}
            $fullWidth={$fullWidth}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </StyledSelect>
          
          <SelectIcon />
        </SelectContainer>

        {error && (
          <ErrorMessage id={`${props.id}-error`} role="alert">
            {error}
          </ErrorMessage>
        )}

        {helperText && !error && (
          <HelperText id={`${props.id}-helper`}>{helperText}</HelperText>
        )}
      </SelectWrapper>
    );
  }
);

Select.displayName = 'Select';

export default Select;
// src/components/common/Input/index.tsx
import { forwardRef } from 'react';
import { InputWrapper, StyledInput, Label, ErrorMessage, HelperText } from './styles';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, $fullWidth, ...props }, ref) => {
    const hasError = !!error;

    return (
      <InputWrapper $fullWidth={$fullWidth}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        
        <StyledInput
          ref={ref}
          $hasError={hasError}
          $fullWidth={$fullWidth}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined
          }
          {...props}
        />
        
        {error && (
          <ErrorMessage id={`${props.id}-error`} role="alert">
            {error}
          </ErrorMessage>
        )}
        
        {helperText && !error && (
          <HelperText id={`${props.id}-helper`}>{helperText}</HelperText>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
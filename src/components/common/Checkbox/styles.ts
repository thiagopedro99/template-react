// src/components/common/Checkbox/styles.ts
import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{ $checked: boolean; $disabled: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ $checked, theme }) =>
      $checked ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.colors.primary : theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }

  ${CheckboxWrapper}:hover &:not([disabled]) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CheckIcon = styled.span`
  color: ${({ theme }) => theme.colors.text.inverse};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 5px;
    height: 10px;
    border: solid currentColor;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
  }
`;

export const Label = styled.span<{ $disabled: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.primary};
  
  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;
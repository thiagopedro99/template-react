// src/components/common/Checkbox/types.ts
import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}
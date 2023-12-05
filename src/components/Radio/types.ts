import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface RadioProps {
  id: string;
  label: string;
  value: number;
  register: UseFormRegister<FieldValues>;
}

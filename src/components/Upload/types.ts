import {
  FieldErrors,
  FieldValues,
  UseFormWatch,
  UseFormRegister,
} from 'react-hook-form';

export interface UploadProps {
  id: string;
  name: string;
  label: string;
  helper: string;
  placeholder: string;
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

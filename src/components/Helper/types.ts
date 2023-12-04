import { FieldErrors } from 'react-hook-form';

export interface HelperProps {
  name: string;
  helper: string;
  errors: FieldErrors;
}

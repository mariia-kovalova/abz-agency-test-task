import { IPosition } from 'src/types/Position';

export interface FormProps {
  positions: IPosition[];
  token: string;
  className?: string;
  onFormSubmit: (success: boolean) => void;
}

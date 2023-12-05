import { IPosition } from 'src/types/Position';

export interface FormProps {
  positions: IPosition[];
  token: string;
  onFormSubmit: (success: boolean) => void;
}

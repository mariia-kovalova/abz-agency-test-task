import { IPosition } from 'src/types/Position';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface PositionsListProps {
  positions: IPosition[];
  register: UseFormRegister<FieldValues>;
  className?: string;
}

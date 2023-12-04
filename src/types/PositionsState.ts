import { IPosition } from './Position';

export interface IPositionsState {
  positions: IPosition[];
  isLoading: boolean;
  isError: boolean;
  getPositions: () => void;
}

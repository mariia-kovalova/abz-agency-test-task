import { PositionsListProps } from './types';

export const PositionsList: React.FC<PositionsListProps> = ({ positions }) => (
  <ul>
    {positions.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

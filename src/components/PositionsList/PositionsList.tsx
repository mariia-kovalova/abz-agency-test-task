import clsx from 'clsx';
import { PositionsListProps } from './types';

export const PositionsList: React.FC<PositionsListProps> = ({
  positions,
  className,
}) => {
  const listClasses = clsx('flex flex-col gap-[7px]', className);

  return (
    <ul className={listClasses}>
      {positions.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

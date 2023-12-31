import clsx from 'clsx';
import { PositionsListProps } from './types';
import { Radio } from '../Radio';

export const PositionsList: React.FC<PositionsListProps> = ({
  positions,
  register,
  className,
}) => {
  const listClasses = clsx('flex flex-col gap-[7px]', className);

  return (
    <ul className={listClasses}>
      {positions.map(({ id, name }) => (
        <li key={id}>
          <Radio
            id={id.toString()}
            value={id}
            label={name}
            register={register}
          />
        </li>
      ))}
    </ul>
  );
};

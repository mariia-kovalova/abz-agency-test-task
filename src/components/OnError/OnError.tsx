import clsx from 'clsx';
import { OnErrorProps } from './types';

export const OnError: React.FC<OnErrorProps> = ({ className }) => {
  const onErrorClasses = clsx('text-center', className);

  return <p className={onErrorClasses}>Sorry, something went wrong.</p>;
};

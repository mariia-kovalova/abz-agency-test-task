import clsx from 'clsx';
import './loader.scss';
import { LoaderProps } from './types';

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  const loaderClasses = clsx('frame', className);

  return (
    <svg className={loaderClasses} viewBox="25 25 50 50">
      <circle className="circle" r="20" cy="50" cx="50" />
    </svg>
  );
};

import clsx from 'clsx';
import { HelperProps } from './types';
import { ErrorMessage } from '@hookform/error-message';

export const Helper: React.FC<HelperProps> = ({ name, helper, errors }) => {
  const isError = errors[name];
  const isHelper = !isError && helper !== '';

  const helperClasses = clsx(
    'absolute bottom-[-18px] left-4 text-[12px] leading-[14px] text-gray-300',
    {
      'text-red': isError,
    },
  );

  return (
    <p className={helperClasses}>
      {isHelper ? helper : null}
      <ErrorMessage errors={errors} name={name} />
    </p>
  );
};

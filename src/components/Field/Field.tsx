import clsx from 'clsx';
import { Helper } from '../Helper';
import { FieldProps } from './types';
import './field.scss';

export const Field: React.FC<FieldProps> = ({
  id,
  type,
  name,
  label,
  placeholder,
  helper,
  register,
  errors,
}) => {
  const isError = !!errors[name];

  const inputClasses = clsx('field-input common-transition', {
    'border-[2px] border-red': isError,
  });

  const labelClasses = clsx('field-label common-transition', {
    'text-red': isError,
  });

  return (
    <div className="field">
      <input
        className={inputClasses}
        placeholder={placeholder}
        type={type}
        id={id}
        {...register(name)}
      />

      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>

      <Helper name={name} helper={helper} errors={errors} />
    </div>
  );
};

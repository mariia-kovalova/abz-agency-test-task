import clsx from 'clsx';
import { useState, useEffect } from 'react';

import { Helper } from 'src/components/Helper';
import { getFileName } from 'src/utils';
import { UploadProps } from './types';

export const Upload: React.FC<UploadProps> = ({
  id,
  name,
  label,
  helper,
  placeholder,
  watch,
  register,
  errors,
}) => {
  const [fileName, setFileName] = useState(placeholder);

  const uploadData = watch(name);

  useEffect(() => {
    setFileName(getFileName(uploadData) || placeholder);
  }, [placeholder, uploadData, watch]);

  const isError = errors[name];

  const textLabelClasses = clsx(
    'common-transition max-w-[83px] grow rounded-bl-[4px] rounded-tl-[4px] border border-black-light bg-white px-[15px] py-[14px]',
    {
      '!border-[2px] !border-red': isError,
    },
  );

  const fileNameClasses = clsx(
    'common-transition text-300 grow rounded-br-[4px] rounded-tr-[4px] border !border-l-0 bg-transparent px-4 py-[14px] text-gray-300',
    {
      '!border-[2px] !border-red': isError,
      'text-black-light': uploadData?.length,
    },
  );

  return (
    <div className="relative h-[54px]">
      <label
        className="flex h-full w-full cursor-pointer items-center"
        htmlFor={id}
      >
        <span className={textLabelClasses}>{label}</span>
        <span className={fileNameClasses}>{fileName}</span>
      </label>

      <input
        className="visually-hidden"
        id={id}
        type="file"
        accept="image/*"
        {...register(name)}
      />

      <Helper name={name} helper={helper} errors={errors} />
    </div>
  );
};

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import { Field } from 'src/components/Field';
import { PositionsList } from 'src/components/PositionsList';
import { Upload } from 'src/components/Upload';

import { API } from 'src/api/testTaskApi';
import { appendValues } from 'src/utils';

import { FormProps } from './types';
import { schema } from 'src/data/schema';
import data from 'src/data/sign-up.json';

const { storage_key, fields, radio, upload, btn_text } = data.form;

export const Form: React.FC<FormProps> = ({
  positions,
  token,
  onFormSubmit,
}) => {
  const {
    reset,
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FieldValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema) as FieldValues | any,
  });

  useFormPersist(storage_key, { watch, setValue });

  const onSubmit = async (values: FieldValues) => {
    const formData = new FormData();
    appendValues(formData, values);
    try {
      const { success } = await API.createUser(formData, token);
      reset();
      onFormSubmit(success);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mx-auto max-w-[380px]" onSubmit={handleSubmit(onSubmit)}>
      <ul className="flex flex-col gap-[50px]">
        {fields.map(field => (
          <li key={field.id}>
            <Field {...field} register={register} errors={errors} />
          </li>
        ))}
      </ul>

      <p className="mb-[11px] mt-[43px]">{radio.title}</p>
      <PositionsList
        className="mb-[47px]"
        positions={positions}
        register={register}
      />

      <Upload {...upload} watch={watch} register={register} errors={errors} />

      <button
        className="button mx-auto mt-[50px]"
        disabled={!isDirty}
        type="submit"
      >
        {btn_text}
      </button>
    </form>
  );
};

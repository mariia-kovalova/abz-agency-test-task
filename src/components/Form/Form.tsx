import { usePositions, useToken } from 'src/hooks';
import { FieldValues, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import { PositionsList } from 'src/components/PositionsList';
import { Loader } from 'src/components/Loader';
import { OnError } from 'src/components/OnError';

import { API } from 'src/api/testTaskApi';
import { FormProps } from './types';
import data from 'src/data/sign-up.json';
import { Field } from '../Field';

const { storage_key, fields, positions_title, upload, btn_text } = data.form;

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const { positions, isLoading, isError } = usePositions();
  const token = useToken();

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FieldValues>({
    // resolver: yupResolver(schema) as FieldValues | any,
  });

  useFormPersist(storage_key, { watch, setValue });

  const onSubmit = async (values: FieldValues) => {
    const formData = new FormData();
    //  appendValues(formData, data);
    try {
      const { success } = await API.createUser(formData, token);
      onFormSubmit(success);
    } catch (error) {
      console.log(error);
    }
  };

  const showPositions = positions.length > 0 && !isLoading && !isError;

  return (
    <form className="mx-auto max-w-[380px]" onSubmit={handleSubmit(onSubmit)}>
      <ul className="flex flex-col gap-[50px]">
        {fields.map(field => (
          <li key={field.id}>
            <Field {...field} register={register} errors={errors} />
          </li>
        ))}
      </ul>

      <p className="mt-[43px]">{positions_title}</p>

      {showPositions ? (
        <PositionsList className="mt-[11px]" positions={positions} />
      ) : null}
      {isLoading ? <Loader /> : null}
      {isError ? <OnError /> : null}

      <p className="mt-[47px]">upload</p>

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

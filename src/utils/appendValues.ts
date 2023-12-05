import { FieldValues } from 'react-hook-form';

export const appendValues = (formData: FormData, values: FieldValues) => {
  Object.entries(values).forEach(([key, value]) => {
    if (key === 'photo') {
      formData.append(key, value[0]);
    } else {
      formData.append(key, value);
    }
  });
};

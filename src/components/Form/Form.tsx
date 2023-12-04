import data from 'src/data/sign-up.json';
import { FormProps } from './types';

const { btn_text } = data.form;

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const onSubmit = () => {
    onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <button className="button mx-auto mt-[50px]" type="submit">
        {btn_text}
      </button>
    </form>
  );
};

import { usePositions } from 'src/hooks/usePositions';

import { PositionsList } from 'src/components/PositionsList';
import { Loader } from 'src/components/Loader';
import { OnError } from 'src/components/OnError';

import { FormProps } from './types';
import data from 'src/data/sign-up.json';

const { btn_text } = data.form;

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const { positions, isLoading, isError } = usePositions();

  const onSubmit = () => {
    onFormSubmit();
  };

  const showPositions = positions.length > 0 && !isLoading && !isError;

  return (
    <form onSubmit={onSubmit}>
      {showPositions ? <PositionsList positions={positions} /> : null}
      {isLoading ? <Loader /> : null}
      {isError ? <OnError /> : null}
      <button className="button mx-auto mt-[50px]" type="submit">
        {btn_text}
      </button>
    </form>
  );
};

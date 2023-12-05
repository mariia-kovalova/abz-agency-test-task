import { RadioProps } from './types';
import data from 'src/data/sign-up.json';
import './radio.scss';

const { name } = data.form.radio;

export const Radio: React.FC<RadioProps> = ({ id, label, value, register }) => (
  <>
    <input
      className="radio-input visually-hidden"
      value={value}
      type="radio"
      id={id}
      {...register(name)}
    />
    <label className="radio-label" htmlFor={id}>
      {label}
    </label>
  </>
);

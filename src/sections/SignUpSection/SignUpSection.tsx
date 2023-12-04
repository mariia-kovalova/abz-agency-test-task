import { sign_up_section } from 'src/data/links';
import data from 'src/data/sign-up.json';

const { title } = data;

export const SignUpSection = () => {
  return (
    <section id={sign_up_section} className="section">
      <div className="wrapper">
        <h2 className="heading">{title}</h2>
      </div>
    </section>
  );
};

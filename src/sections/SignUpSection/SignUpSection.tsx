import clsx from 'clsx';
import { useState } from 'react';

import { Form } from 'src/components/Form';

import { sign_up_section } from 'src/data/links';
import data from 'src/data/sign-up.json';
import './signUpSection.scss';

const { title, titleOnSubmit } = data;

export const SignUpSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionClasses = clsx('wrapper', {
    'success-sign-up': isSubmitted,
  });

  return (
    <section id={sign_up_section} className="section !pb-[100px]">
      <div className={sectionClasses}>
        <h2 className="heading mb-[50px]">
          {!isSubmitted ? title : titleOnSubmit}
        </h2>
        {!isSubmitted ? (
          <Form onFormSubmit={() => setIsSubmitted(true)} />
        ) : null}
      </div>
    </section>
  );
};

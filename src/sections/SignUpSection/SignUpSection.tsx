import clsx from 'clsx';
import { useState } from 'react';
import { usePositions, useToken } from 'src/hooks';

import { Form } from 'src/components/Form';
import { sign_up_section } from 'src/data/links';
import data from 'src/data/sign-up.json';
import './signUpSection.scss';
import { Loader } from 'src/components/Loader';
import { OnError } from 'src/components/OnError';
import { useUsersStore } from 'src/store/users';

const { title, titleOnSubmit } = data;

export const SignUpSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { positions, isLoading, isError } = usePositions();
  const refreshUsers = useUsersStore(state => state.reloadUsers);
  const token = useToken();

  const sectionClasses = clsx('wrapper', {
    'success-sign-up': isSubmitted,
  });

  const formClasses = clsx({
    'visually-hidden': isSubmitted,
  });

  const handleFormSubmit = (success: boolean) => {
    if (!success) return;
    setIsSubmitted(true);
    refreshUsers();
  };

  const showForm = positions.length > 0 && !isLoading && !isError && token;

  return (
    <section id={sign_up_section} className="section !pb-[100px]">
      <div className={sectionClasses}>
        <h2 className="heading mb-[50px]">
          {!isSubmitted ? title : titleOnSubmit}
        </h2>
        {showForm ? (
          <Form
            className={formClasses}
            positions={positions}
            token={token}
            onFormSubmit={handleFormSubmit}
          />
        ) : null}

        {isLoading ? <Loader className="mx-auto" /> : null}
        {isError ? <OnError className="" /> : null}
      </div>
    </section>
  );
};

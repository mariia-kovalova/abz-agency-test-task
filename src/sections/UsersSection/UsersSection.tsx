import { UsersList } from 'src/components/UsersList';
import { usePagination } from 'src/hooks/usePagination';

import { users_section } from 'src/data/links';
import data from 'src/data/users.json';
import { Loader } from 'src/components/Loader';
import { OnError } from 'src/components/OnError';

const { title, count, btn_text } = data;

export const UsersSection = () => {
  const { users, isLoading, isError, isMore, handleLoadMore } =
    usePagination(count);

  const showUsers = users.length > 0 && !isError;
  const showButton = !isLoading && !isError && isMore;

  return (
    <section id={users_section} className="section mt-[70px]">
      <div className="wrapper">
        <h2 className="heading mb-[50px]">{title}</h2>

        {showUsers ? <UsersList users={users} /> : null}
        {isLoading ? <Loader className="mx-auto mt-[50px]" /> : null}
        {isError ? <OnError /> : null}

        {showButton ? (
          <button
            className="button mx-auto mt-[50px]"
            type="button"
            onClick={handleLoadMore}
          >
            {btn_text}
          </button>
        ) : null}
      </div>
    </section>
  );
};

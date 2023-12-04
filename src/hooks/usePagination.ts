import { useEffect } from 'react';
import { useUsersStore } from 'src/store/users';

export const usePagination = () => {
  const getUsers = useUsersStore(state => state.getUsers);
  const setPage = useUsersStore(state => state.setPage);

  const users = useUsersStore(state => state.users);
  const page = useUsersStore(state => state.page);
  const totalUsers = useUsersStore(state => state.totalUsers);
  const isLoading = useUsersStore(state => state.isLoading);
  const isError = useUsersStore(state => state.isError);

  useEffect(() => {
    getUsers(page);
  }, [getUsers, page]);

  const isMore = totalUsers > users.length;

  const handleLoadMore = () => setPage(page + 1);

  return { users, isLoading, isError, handleLoadMore, isMore };
};

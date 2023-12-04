import { useState, useEffect } from 'react';
import { API } from 'src/api/testTaskApi';
import { IUser } from 'src/types/User';

export const usePagination = (count: number) => {
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isMore = totalUsers > users.length;

  useEffect(() => {
    setIsError(false);
    getUsers(page, count);

    async function getUsers(page: number, count: number) {
      try {
        setIsLoading(true);
        const { users, total_users } = await API.getAllUsers(page, count);
        setUsers(prev => [...prev, ...users]);
        setTotalUsers(total_users);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [count, page]);

  const handleLoadMore = () => setPage(prev => prev + 1);

  return { users, isLoading, isError, handleLoadMore, isMore };
};

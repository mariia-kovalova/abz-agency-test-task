import { API } from 'src/api/testTaskApi';
import { IUsersState } from 'src/types/Users';
import { create } from 'zustand';

import data from 'src/data/users.json';

export const useUsersStore = create<IUsersState>(set => ({
  users: [],
  page: 1,
  totalUsers: 0,
  isLoading: false,
  isError: false,

  getUsers: async page => {
    try {
      set({ isLoading: true, isError: false });
      const { users, total_users } = await API.getUsers(page, data.count);
      set(state => ({
        users: page === 1 ? users : [...state.users, ...users],
        totalUsers: total_users,
      }));
    } catch (error) {
      set({ isError: true });
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  setPage: page => {
    set({ page });
  },
}));

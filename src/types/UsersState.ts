import { IUser } from './User';

export interface IUsersState {
  users: IUser[];
  page: number;
  totalUsers: number;
  isLoading: boolean;
  isError: boolean;
  getUsers: (page: number) => void;
  setPage: (page: number) => void;
  reloadUsers: () => void;
}

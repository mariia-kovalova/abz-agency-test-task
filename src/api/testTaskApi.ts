import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { IPosition } from 'src/types/Position';
import { IUser } from 'src/types/User';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const getUsers = async (
  page: number,
  count: number,
): Promise<{ total_users: number; users: IUser[] }> => {
  const { data } = await axios.get('/users', {
    params: {
      page,
      count,
    },
  });
  return data;
};

const createUser = async (
  formData: FieldValues,
  token: string,
): Promise<{ success: boolean }> => {
  const { data } = await axios.post('/users', formData, {
    headers: {
      Token: token,
    },
  });
  return data;
};

const getUserById = async (id: string): Promise<{ user: IUser }> => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

const getPositions = async (): Promise<{ positions: IPosition[] }> => {
  const { data } = await axios.get('/positions');
  return data;
};

const getToken = async (): Promise<{ token: string }> => {
  const { data } = await axios.get('/token');
  return data;
};

export const API = {
  getUsers,
  createUser,
  getUserById,
  getPositions,
  getToken,
};

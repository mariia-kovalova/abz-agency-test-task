import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { IUser } from 'src/types/User';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const getAllUsers = async (
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

const createUser = async (formData: FieldValues, token: string) => {
  const { data } = await axios.post('/users', formData, {
    headers: {
      Token: token,
    },
  });
  return data;
};

const getUserById = async (id: string): Promise<IUser> => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

const getPositions = async () => {
  const { data } = await axios.get('/positions');
  return data;
};

const getToken = async () => {
  const { data } = await axios.get('/token');
  return data;
};

export const API = {
  getAllUsers,
  createUser,
  getUserById,
  getPositions,
  getToken,
};

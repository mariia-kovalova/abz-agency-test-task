import { useEffect, useState } from 'react';
import { API } from 'src/api/testTaskApi';

export const useToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      try {
        const { token } = await API.getToken();
        setToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, []);

  return token;
};

import { useEffect, useState } from 'react';
import { API } from 'src/api/testTaskApi';
import { IPosition } from 'src/types/Position';

export const usePositions = () => {
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPositions = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { positions } = await API.getPositions();
        setPositions(positions);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPositions();
  }, []);

  return {
    positions,
    isLoading,
    isError,
  };
};

import { useEffect, useState } from 'react';

export const useSearch = (data: any[], key: string) => {
  const [dataResult, setData] = useState(data);

  useEffect(() => {
    const newData = data?.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()));
    setData(newData);
  }, [key]);

  return { dataResult }
};

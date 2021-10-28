import { useEffect, useState } from 'react';

export default function useFilter(data, filter) {
  const [dataFiltered, setData] = useState(data);

  useEffect(() => {
    let filteredData = data;
    if (filter.filterByName) {
      filteredData = filteredData
        .filter((item) => item
          .name.toLowerCase().includes(filter.filterByName.toLowerCase()));
    }
    return setData(filteredData);
  }, [data, filter]);

  return { dataFiltered };
}

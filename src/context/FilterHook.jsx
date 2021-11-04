import { useEffect, useState } from 'react';

export default function useFilter(data, filter) {
  const [filteredData, setData] = useState(data);

  useEffect(() => {
    let filtered = data;
    if (filter.nameFilter) {
      filtered = filtered
        .filter((item) => item
          .name.toLowerCase().includes(filter.nameFilter.toLowerCase()));
    }
    return setData(filtered);
  }, [data, filter]);

  return { filteredData };
}

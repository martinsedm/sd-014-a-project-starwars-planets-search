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
    if (filter.FilterByNumber.length > 0) {
      filtered = filtered
        .filter((e) => filter.FilterByNumber
          .every((f) => {
            if (f.comparison === 'maior que') return Number(e[f.column]) > f.value;
            if (f.comparison === 'menor que') return Number(e[f.column]) < f.value;
            if (f.comparison === 'igual a') return Number(e[f.column]) === f.value;
            return true;
          }));
    }
    return setData(filtered);
  }, [data, filter]);

  return { filteredData };
}

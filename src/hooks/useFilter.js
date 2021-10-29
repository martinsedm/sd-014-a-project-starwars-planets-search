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
    if (filter.filterByNumericValue.length > 0) {
      console.log('numero');
      filteredData = filteredData
        .filter((item) => filter.filterByNumericValue
          .every((e) => {
            console.log(e.comparison);
            if (e.comparison === 'maior que') return Number(item[e.column]) > e.value;
            if (e.comparison === 'menor que') return Number(item[e.column]) < e.value;
            if (e.comparison === 'igual a') return Number(item[e.column]) === e.value;
            return true;
          }));
    }
    return setData(filteredData);
  }, [data, filter]);

  return { dataFiltered };
}

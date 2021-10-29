import { useEffect, useState } from 'react';

export default function useFilter(data,
  { filterByName, filterByNumericValue, order: { column, sort } }) {
  const [dataFiltered, setData] = useState(data);

  useEffect(() => {
    // Better way sort data by column with numbers and strings from https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    let filteredData = data;
    if (filterByName) {
      filteredData = filteredData
        .filter((item) => item
          .name.toLowerCase().includes(filterByName.toLowerCase()));
    }
    if (filterByNumericValue.length > 0) {
      filteredData = filteredData
        .filter((item) => filterByNumericValue
          .every((e) => {
            if (e.comparison === 'maior que') return Number(item[e.column]) > e.value;
            if (e.comparison === 'menor que') return Number(item[e.column]) < e.value;
            if (e.comparison === 'igual a') return Number(item[e.column]) === e.value;
            return true;
          }));
    }
    if (sort === 'ASC') {
      const sortedData = [...filteredData];
      sortedData.sort((a, b) => collator.compare(a[column], b[column]));
      return setData(sortedData);
    }
    const sortedData = [...filteredData];
    sortedData.sort((a, b) => collator.compare(b[column], a[column]));
    return setData(sortedData);
  }, [data, filterByName, filterByNumericValue, column, sort]);

  return { dataFiltered };
}

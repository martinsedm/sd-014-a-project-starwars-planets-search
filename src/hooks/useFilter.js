import { useEffect, useState } from 'react';

const useFilter = (planets, filters) => {
  const { filterByName, filterByNumericValues, order: { column, sort } } = filters;
  const [filteredPlanets, setFilteredPlanets] = useState(planets);

  useEffect(() => {
    const filteredData = planets
      .filter(({ name }) => !filterByName
        || name.toLowerCase().includes(filterByName.toLowerCase()))
      .filter((data) => (filterByNumericValues.length === 0)
        || filterByNumericValues.every((e) => {
          switch (e.comparison) {
          case 'maior que':
            return Number(data[e.column]) > e.value;
          case 'menor que':
            return Number(data[e.column]) < e.value;
          default:
            return Number(data[e.column]) === e.value;
          }
        }));

    // Create a Collator instance to use natural sorting. Usage: new Intl.Collator(locales, options)
    // locale: a BCP 47 language tag
    // options: determines how the comparison is done;
    //   numeric 'true' determines wether to compare numbers as numbers or strings, such that 1 < 2 < 10.
    //   sensitivity 'base' means only strings that differ in base letters compare as unequal, such that a ≠ b, a = á, a = A.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator.
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
    if (sort === 'ASC') {
      const sortedData = [...filteredData];
      sortedData.sort((a, b) => collator.compare(a[column], b[column]));
      return setFilteredPlanets(sortedData);
    }
    const sortedData = [...filteredData];
    sortedData.sort((a, b) => collator.compare(b[column], a[column]));
    return setFilteredPlanets(sortedData);
  }, [planets, filterByName, filterByNumericValues, column, sort]);

  return { filteredPlanets };
};

export default useFilter;

import React, { useContext, useState } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';
import Input from './atomos/Input';

export default function Header() {
  const INITIAL_NUMBFILTER = {
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  };
  const { columns, filters, setFilters } = useContext(Context);
  const [eachFilter, setEachFilter] = useState(INITIAL_NUMBFILTER);
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const { column, comparison, value } = eachFilter;

  const handleChange = ({ target: { value: val, name } }) => {
    setEachFilter({
      ...eachFilter,
      [name]: val,
    });
  };

  // useEffect((
  //   () => {
  //     const { filterByNumericValues } = filters;
  //     const reduce = filterByNumericValues.reduce((acc, ele) => acc.push(ele.column), []);
  //     console.log(filterByNumericValues);
  //     console.log(reduce);
  //   }
  // ), [filters]);

  if (!columns) return <span>Loading...</span>;

  const NEXT_NUMBFILTER = {
    column: columns[0],
    comparison: 'maior que',
    value: '100000',
  };

  const handleClick = (() => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        eachFilter,
      ],
    });
    setEachFilter(NEXT_NUMBFILTER);
    // if (filterByNumericValues.length > 0) {
    //   const col = filterByNumericValues.map(({ column: c }) => console.log('c', c));
    //   console.log('col', col);
    // }
  });

  return (
    <header>
      <select
        value={ column }
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columns.map((col) => (
          <option key={ col }>{ col }</option>
        ))}
      </select>
      <select
        value={ comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((comp) => (
          <option key={ comp }>{ comp }</option>
        ))}
      </select>
      <Input
        type="number"
        testId="value"
        name="value"
        onChange={ handleChange }
        value={ value }
      />
      <Button label="Filtrar" onClick={ handleClick } />
    </header>
  );
}

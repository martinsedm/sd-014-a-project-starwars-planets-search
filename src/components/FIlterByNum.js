import React, { useContext, useState } from 'react';
import filterContext from '../context/filterContext';

const FilterByNum = () => {
  const { filters, setFilters } = useContext(filterContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  //   handleClick(){

  //   }

  return (
    <>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(
          target.value,
        ) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="input-number">
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilters({
            ...filters,
            filterByNumericValues: [...filters.filterByNumericValues,
              { column, comparison, value }],
          });
        //   handleClick();
        } }
      >
        Filtrar
      </button>
    </>
  );
};

export default FilterByNum;

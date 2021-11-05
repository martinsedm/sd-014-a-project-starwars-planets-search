import React, { useContext } from 'react';
import filterContext from '../context/filterContext';

const FilterByNum = () => {
  const {
    selectColumns,
    filters,
    setFilters,
    handleClick,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue } = useContext(filterContext);

  return (
    <>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {selectColumns.map((col) => <option key={ col }>{col}</option>)}
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
          handleClick(column, comparison, value);
        } }
      >
        Filtrar
      </button>

    </>
  );
};

export default FilterByNum;

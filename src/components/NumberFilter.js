import React, { useContext, useState } from 'react';
import StarWarsContext from '../context';

function NumberFilter() {
  const {
    setFilterByNumber,
    renderOptions,
    setRenderOptions,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const isFilter = filterByNumericValues.length > 0;

  const [numberFilters, setNumbernumberFilters] = useState({
    column: isFilter && filterByNumericValues[0].column,
    comparison: isFilter && filterByNumericValues[0].comparison,
    value: isFilter && filterByNumericValues[0].value,
  });

  const handleChange = (e) => {
    setNumbernumberFilters({
      ...numberFilters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        setFilterByNumber(numberFilters);
        const { columns, comparison: comparisonOptions } = renderOptions;
        const { column, comparison } = numberFilters;
        setRenderOptions({
          columns: columns.filter((option) => option !== column),
          comparison: comparisonOptions.filter((option) => option !== comparison),
        });
      } }
    >
      <select name="column" data-testid="column-filter" onChange={ handleChange }>
        {
          renderOptions.columns
            .map((key) => (
              <option
                value={ key }
                key={ key }
              >
                { key }
              </option>
            ))
        }
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ handleChange }>
        {
          renderOptions.comparison
            .map((comparison) => (
              <option
                value={ comparison }
                key={ comparison }
              >
                { comparison }
              </option>
            ))
        }
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default NumberFilter;

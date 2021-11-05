import React, { useContext, useState } from 'react';
import StarWarsContext from '../context';

function NumberFilter() {
  const {
    setFilterByNumber,
    renderOptions,
    setRenderOptions,
    filters,
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(StarWarsContext);

  const isFilter = filterByNumericValues.length > 0;

  const [numberFilters, setNumberFilters] = useState({
    column: isFilter && filterByNumericValues[0].column,
    comparison: isFilter && filterByNumericValues[0].comparison,
    value: isFilter && filterByNumericValues[0].value,
  });

  const handleChange = (e) => {
    setNumberFilters({
      ...numberFilters,
      [e.target.name]: e.target.value,
    });
  };

  const removeFilter = (removeIndex) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter((_filter, index) => index !== removeIndex),
    });
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        setFilterByNumber(numberFilters);
        const { columns } = renderOptions;
        const { column } = numberFilters;
        setRenderOptions({
          ...renderOptions,
          columns: columns.filter((option) => option !== column),
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
      <fieldset>
        {
          isFilter && (
            <div data-testid="filter">
              {
                Object.values(filterByNumericValues[0])
                  .map((value) => (
                    <span key={ value }>{ `${value} ` }</span>
                  ))
              }
              <button type="button" onClick={ () => removeFilter(0) }>X</button>
            </div>
          )
        }
      </fieldset>
    </form>
  );
}

export default NumberFilter;

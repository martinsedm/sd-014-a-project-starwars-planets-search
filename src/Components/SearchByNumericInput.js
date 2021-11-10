import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';
import UsedFilters from './UsedFilters';

function SearchByNumericInput() {
  const {
    availableColumns, filters, setAvailableColumns, setFilters, setFilterMethod,
  } = useContext(PlanetContext);

  const [comparisonFilters, setComparisonFilters] = useState({});

  function handleChange({ target: { name, value: content } }) {
    setComparisonFilters({
      ...comparisonFilters,
      [name]: content,
    });
  }

  function renderAvailableColumns() {
    return (
      availableColumns.map((availableColumn, index) => (
        <option key={ index }>{availableColumn}</option>
      ))
    );
  }

  function handleFilters(column, comparison, value) {
    if (filters !== undefined && filters.filterByNumericValues !== undefined) {
      return {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      };
    }

    return {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    };
  }

  function handleClick() {
    const { column: lastSelectedColumn, comparison, value } = comparisonFilters;
    const allFiltersSelected = lastSelectedColumn && comparison && value;

    if (allFiltersSelected) {
      setFilters(handleFilters(lastSelectedColumn, comparison, value));
      setFilterMethod('numeric');
      const newAvailableColumns = availableColumns.filter(
        (existingColumn) => lastSelectedColumn !== existingColumn,
      );
      setAvailableColumns(newAvailableColumns);
      setComparisonFilters({});
    }
  }

  function showUsedFilters() {
    if (filters !== undefined) {
      return filters.filterByNumericValues !== undefined
        ? <UsedFilters />
        : null;
    }
  }

  return (
    <fieldset>
      <legend>
        Filtre por valor numérico:
      </legend>
      {showUsedFilters()}
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        { renderAvailableColumns() }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </fieldset>
  );
}

export default SearchByNumericInput;

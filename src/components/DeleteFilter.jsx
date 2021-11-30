import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DeleteFilter() {
  const {
    filters,
    setFilters,
    setFilterNumeric,
    data,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const filterDel = async (filter) => {
    const newFilter = filterByNumericValues
      .filter(({ column }) => column !== filter.column);
    await setFilters({
      ...filters,
      filterByNumericValues: newFilter,
    });
  };

  const removeFilter = async (filter) => {
    await filterDel(filter);
    const filtersNumerics = data.filter((planet) => (filterByNumericValues
      .map((filterObj) => {
        const { column, comparison, value } = filterObj;
        switch (comparison) {
        case 'maior que':
          return parseFloat(planet[column]) > parseFloat(value);
        case 'menor que':
          return parseFloat(planet[column]) < parseFloat(value);
        default:
          return planet[column] === value;
        }
      })));
    setFilterNumeric(filtersNumerics);
  };

  return (
    <ul>
      { filterByNumericValues.map((filter) => (
        <li key={ filter.column } data-testid="filter">
          <span>{ JSON.stringify(filter) }</span>
          <button
            type="button"
            onClick={ () => removeFilter(filter) }
          >
            X
          </button>
        </li>
      )) }
    </ul>
  );
}

export default DeleteFilter;

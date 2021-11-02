import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import FilterColumn from './FilterColumn';
import FilterComparison from './FilterComparison';
import FilterValue from './FilterValue';

export default function SearchByFilters() {
  const { currentFilters,
    filters,
    setFilters,
  } = useContext(PlanetsContext);

  const handleClick = () => {
    const { column, comparison, value } = currentFilters;
    setFilters({
      ...filters,
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    });
  };

  return (
    <div className="filters-form">
      <p>Quer uma seleção específica?</p>
      <FilterColumn />
      <FilterComparison />
      <FilterValue />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

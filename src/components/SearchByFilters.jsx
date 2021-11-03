import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import FilterColumn from './FilterColumn';
import FilterComparison from './FilterComparison';
import FilterValue from './FilterValue';
import UsedFilters from './UsedFilters';

export default function SearchByFilters() {
  const {
    filters,
    setFilters,
    currentFilters,
  } = useContext(PlanetsContext);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        currentFilters,
      ],
    });
  };

  return (
    <>
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
      <UsedFilters />
    </>

  );
}

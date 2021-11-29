import React, { useContext } from 'react';
import StarsContext from '../context/myContext';
import AppliedFilters from './AppliedFilters';
import SortByColumn from './SortByColumn';
import FilterCaracteristic from './FilterCaracteristic';
import FilterComparison from './FilterComparison';
import FilterNumerically from './FilterNumerically';

export default function NumberFilter() {
  const { numericFilter, filters, setFilter } = useContext(StarsContext);
  const handleClick = () => {
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        numericFilter,
      ],
    });
  };

  return (
    <form>
      <p>Procure por especificidade: </p>
      <FilterCaracteristic />
      <FilterComparison />
      <FilterNumerically />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <SortByColumn />
      <AppliedFilters />
    </form>
  );
}

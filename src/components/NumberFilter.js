import React, { useContext } from 'react';
import StarsContext from '../context/myContext';
import FilterCaracteristic from './FilterCaracteristic';
import FilterComparison from './FilterComparison';
import FilterNumerically from './FilterNumerically';

export default function NumberFilter() {
  const { numericFilter, filters, setFilter } = useContext(StarsContext);
  const handleClick = () => {
    const { caracteristic, comparison, value } = numericFilter;
    setFilter({
      ...filters,
      filterByNumericValues: [
        {
          caracteristic,
          comparison,
          value,
        }],
    });
  };

  return (
    <form>
      <p>Quer uma seleção específica?</p>
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
    </form>
  );
}

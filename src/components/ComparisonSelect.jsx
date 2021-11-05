import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ComparisonSelect() {
  const { filters, selectedComparison, setSelectedComparison } = useContext(AppContext);
  const selectOptionsList = ['maior que', 'menor que', 'igual a'];
  const FIVE = 5;
  if (filters.length === FIVE) return <h3>No comparison available</h3>;
  return (
    <select
      data-testid="comparison-filter"
      value={ selectedComparison }
      onChange={ ({ target: { value } }) => setSelectedComparison(value) }
    >
      { selectOptionsList.map((category) => (
        <option
          key={ category }
          value={ category }
        >
          { category }
        </option>)) }
    </select>
  );
}

export default ComparisonSelect;

import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ComparisonSelect() {
  const { filters, setSelectedComparison } = useContext(AppContext);
  const selectOptionsList = [
    { value: '>', text: 'maior que' },
    { value: '<', text: 'menor que' },
    { value: '===', text: 'igual a' },
  ];
  const FIVE = 5;
  if (filters.length === FIVE) return <h3>No comparison available</h3>;
  return (
    <select
      data-testid="comparison-filter"
      onChange={ ({ target: { value } }) => setSelectedComparison(value) }
    >
      { selectOptionsList.map((category) => (
        <option
          key={ category.value }
          value={ category.value }
        >
          { category.text }
        </option>)) }
    </select>
  );
}

export default ComparisonSelect;

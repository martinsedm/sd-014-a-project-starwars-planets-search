import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function FilterComparison() {
  const { currentFilters, setCurrentFilters } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCurrentFilters({
      ...currentFilters,
      comparison: value,
    });
  };

  const selectOptions = [
    '',
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <select
      data-testid="comparison-filter"
      name="comparison-filter"
      onChange={ handleChange }
    >
      {selectOptions.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option }
        </option>
      ))}
    </select>
  );
}

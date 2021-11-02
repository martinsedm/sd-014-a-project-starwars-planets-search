import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function FilterValue() {
  const { currentFilters, setCurrentFilters } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCurrentFilters({
      ...currentFilters,
      value,
    });
  };

  return (
    <div>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          min="0"
          value={ currentFilters.value }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

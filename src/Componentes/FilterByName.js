import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { FilteredByName, setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...FilteredByName,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default FilterByName;

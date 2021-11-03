import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function SearchBar() {
  const { setFilters, filterByName } = useContext(PlanetsContext);

  const handleChange = (e) => {
    filterByName(e.target.value);
    setFilters({
      filters: {
        filterByName: {
          name: e.target.value,
        },
      },
    });
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Nome do planeta..."
        onChange={ handleChange }
      />
    </form>
  );
}

export default SearchBar;

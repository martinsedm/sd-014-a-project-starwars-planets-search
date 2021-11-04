import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { filtersByName, setFilters, filters } = useContext(PlanetsContext);
  const handleChange = (e) => {
    filtersByName(e.target.value);
    setFilters({ ...filters,
      filtersByName: e.target.value });
  };
  return (
    <div>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Filtrar pro nome"
          id="name"
          value={ filters.filterByName }
          onChange={ (e) => handleChange(e) }
        />
      </label>
    </div>
  );
}

export default Search;

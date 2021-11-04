import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { filters, setFilters, filterPlanets } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    filterPlanets(target.value);
    setFilters({ ...filters, filterByName: target.value });
  };

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName }
        onChange={ handleChange }
      />
    </section>
  );
}

export default Search;

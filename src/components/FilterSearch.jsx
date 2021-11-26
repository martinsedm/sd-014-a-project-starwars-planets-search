import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterSearch() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { planets } = useContext(StarWarsContext);
  const { setFilteredPlanets } = useContext(StarWarsContext);

  const { filterByName: { name } } = filters;

  function handleChange({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  const filterPlanets = () => planets.filter(
    (planet) => planet.name.toLowerCase().includes(filters.filterByName.name),
  );

  useEffect(() => {
    setFilteredPlanets(filterPlanets());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <form>
      Search Bar
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
        placeholder="Search..."
      />
    </form>
  );
}

import React, { useContext, useEffect } from 'react';

import PlanetContext from '../context/PlanetContext';

function NameFilter() {
  const { data, filters, setFilters, setPlanets } = useContext(PlanetContext);

  const nameFilterChange = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  useEffect(() => { // "ComponentDidUpdate" to keep the planets that are supposed to be rendered on the table, updated.
    function filterPlanetsByName() {
      if (filters.filterByName.name.length > 0) {
        return data.filter((planet) => (
          planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
        ));
      }
      return data;
    }
    setPlanets(filterPlanetsByName());
  }, [filters.filterByName.name, data, setPlanets]);

  return (
    <form>
      <input
        onChange={ (event) => nameFilterChange(event.target.value) }
        value={ filters.filterByName.name }
        data-testid="name-filter"
        type="text"
        name="name"
        placeholder="Filtrar por nome"
      />
    </form>
  );
}

export default NameFilter;

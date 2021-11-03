import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  // const { filters, setFilters,  } = useContext(PlanetContext);
  const { filters, setFilters, filterPlanetsByName } = useContext(PlanetContext);

  const handleChange = (e) => {
    filterPlanetsByName(e.target.value);
    setFilters({ ...filters, filterByName: { name: e.target.value } });
  };

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquisar..."
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </section>
  );
}

export default Filter;

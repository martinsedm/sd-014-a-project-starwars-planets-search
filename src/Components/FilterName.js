import React, { useContext } from 'react';
import StarwarsContext from '../Provider/StarwarsContext';

function FilterName() {
  const { filters, setFilters, filterPlanetsByName } = useContext(StarwarsContext);

  const handleChange = (e) => {
    filterPlanetsByName(e.target.value);
    setFilters({ ...filters,
      filterByName: e.target.value,
    });
  };

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquisar..."
        value={ filters.filterByName }
        onChange={ handleChange }
      />
    </section>
  );
}
export default FilterName;

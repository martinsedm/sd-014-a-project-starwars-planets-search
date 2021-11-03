import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function SearchByNameInput() {
  const { filters, setFilters, setFilterMethod } = useContext(PlanetContext);

  function handleChange({ target: { value } }) {
    if (value !== '') {
      setFilters({ ...filters, filterByName: { name: value } });
      setFilterMethod('name');
    } else {
      setFilterMethod('noFilter');
    }
  }

  return (
    <label
      htmlFor="name-filter"
    >
      Busque planeta pelo nome
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
}

export default SearchByNameInput;

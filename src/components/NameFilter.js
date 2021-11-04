import React, { useContext } from 'react';
import GlobalContext from '../provider/GlobalContext';

function NameFilter() {
  const { filterByName } = useContext(GlobalContext);
  const filtering = (name) => {
    filterByName(name.toLowerCase());
  };

  return (
    <form>
      <label htmlFor="filter">
        <input
          data-testid="name-filter"
          name="filter"
          onChange={ (event) => filtering(event.target.value) }
          placeholder="Filtrar por nome"
          type="text"
        />
      </label>
    </form>
  );
}

export default NameFilter;

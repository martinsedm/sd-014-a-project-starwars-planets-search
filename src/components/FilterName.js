import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

function FilterName() {
  const { filters, setFilterByName } = useContext(contextApp);
  const { filterByName } = filters;
  const { name } = filterByName;

  return (
    <div>
      <input
        value={ name }
        placeholder="Filter by name"
        data-testid="name-filter"
        onChange={ (event) => setFilterByName(event.target.value) }
        type="text"
      />
    </div>
  );
}

export default FilterName;

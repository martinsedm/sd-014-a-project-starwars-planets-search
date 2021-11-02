import React, { useState, useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function NameFilter() {
  const {
    filters,
    setFilters,
  } = useContext(SWContext);

  const [name, setName] = useState('');

  useEffect(() => {
    setFilters({ ...filters, filterByName: name.toLowerCase() });
  }, [name]);

  return (
    <label htmlFor="search">
      <input
        name="search"
        type="text"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
        placeholder="Filtrar por nome"
        data-testid="name-filter"
      />
    </label>
  );
}

export default NameFilter;

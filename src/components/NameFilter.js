import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../provider/GlobalContext';

function NameFilter() {
  const { filters, filterData, setFilters } = useContext(GlobalContext);
  const [name, setName] = useState('');

  useEffect(() => {
    setFilters({ ...filters, filterByName: name.toLowerCase() });
  }, [name]);

  useEffect(() => {
    filterData();
  }, [filters]);

  return (
    <form>
      <label htmlFor="filter">
        <input
          data-testid="name-filter"
          name="filter"
          onChange={ (event) => setName(event.target.value) }
          placeholder="Filtrar por nome"
          type="text"
          value={ name }
        />
      </label>
    </form>
  );
}

export default NameFilter;

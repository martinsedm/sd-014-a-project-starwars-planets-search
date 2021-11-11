import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchBar() {
  const { filters, filterData, setFilters } = useContext(PlanetsContext);
  const [name, setName] = useState('');

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setFilters({
      ...filters,
      filterByName: name.toLowerCase(),
    });
  }, [name]);

  useEffect(() => {
    filterData();
  }, [filters]);

  const onButtonClick = () => {
    setFilters({ ...filters, x: { column, comparison, value } });
  };

  return (
    <div>
      <input
        type="text"
        name="name-filter"
        value={ name }
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ ({ target }) => setName(target.value) }
      />
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="">-</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="">-</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onButtonClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SearchBar;

import React, { useContext, useEffect, useState } from 'react';
import SWContext from '../context/SWContext';

function Form() {
  const { filterData, setFilters, filters } = useContext(SWContext);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior');
  const [value, setValue] = useState('value');

  useEffect(() => {
    setFilters({ ...filters, filterByName: name.toLowerCase() });
  }, [name]);

  useEffect(() => {
    filterData();
  }, [filters]);

  const onButtonClick = () => {
    setFilters({ ...filters, filterByNumericValues: { column, comparison, value } });
  };

  return (
    <form>
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
      <br />
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ onButtonClick }>
        Filtrar
      </button>
    </form>
  );
}

export default Form;

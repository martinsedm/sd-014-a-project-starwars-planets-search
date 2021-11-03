import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterNumber() {
  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('');

  const { filters,
    setFilters,
    columns,
    filterPlanetsByNumericValues } = useContext(PlanetContext);

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        setFilters({ ...filters,
          filterByNumericValues: [...filters.filterByNumericValues,
            { column, comparison, value }] });
        filterPlanetsByNumericValues(column, comparison, value);
      } }
    >
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        { columns.map((colun) => (
          <option key={ colun } value={ colun }>{ colun }</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default FilterNumber;

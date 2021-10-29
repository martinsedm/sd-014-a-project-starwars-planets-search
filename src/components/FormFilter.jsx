import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function FormFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const {
    filters,
    setFilters,
    columns,
    filterPlanetsByNumericValues,
  } = useContext(StarWarsContext);

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
        { columns.map((c) => (
          <option key={ c } value={ c }>{ c }</option>
        )) }
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
      <input
        data-testid="value-filter"
        value={ value }
        type="number"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default FormFilter;

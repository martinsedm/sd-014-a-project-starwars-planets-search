import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterNumber() {
  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('');

  const { filters,
    setFilters,
    columns,
    // filterByNumericValues,
    filterPlanetsByNumericValues, addColumn,
    removeFilterByNumericValues,
    resetFilters } = useContext(PlanetContext);

  return (
    <section className="formulario">
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
          className="column"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          { columns.map((colun) => (
            <option key={ colun } value={ colun }>{ colun }</option>
          ))}
        </select>

        <select
          className="maior-menor"
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
            className="number"
            type="number"
            data-testid="value-filter"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>
        <button
          className="btn-filter"
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
        <div className="btn">
          {filterByNumericValues.map((filter) => (
            <p
              key={ filter.column }
            >
              { `${filter.column} ${filter.comparison} ${filter.value}`}
            </p>
          )) }

          <button
            data-testid="filter"
            type="button"
            className="btn-x"
            onClick={ () => {
              addColumn(column);
              removeFilterByNumericValues(column);
              resetFilters();
            } }
          >
            {' '}
            x
            {' '}
          </button>
        </div>
      </form>
    </section>
  );
}

export default FilterNumber;

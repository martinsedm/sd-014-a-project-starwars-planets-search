import React, { useContext } from 'react';
import ContextPlanet from '../context/ContextPlanet';

function ColumnFilter() {
  const { column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filters,
    setFilters,
    options,
    setOptions,
    setNameColumn,
    setOrdem,
    sortElement,
    ordem,
    nameColumn,
  } = useContext(ContextPlanet);

  const optionsRemoveFilters = () => {
    const optionRemoveFilter = options.filter((option) => option !== column);
    setOptions(optionRemoveFilter);
  };

  const handleSearch = (e) => {
    if (e.target.name === 'column') {
      setColumn(e.target.value);
    } if (e.target.name === 'comparison') {
      setComparison(e.target.value);
    } if (e.target.name === 'value') {
      setValue(e.target.value);
    }
  };

  const handleClick = () => {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value },
      ],
    });

    optionsRemoveFilters();
  };

  const handleRemove = (elemento) => {
    const removeFiltro = filters.filterByNumericValues
      .filter((filtro) => (elemento !== filtro.column));
    setFilters({
      filterByNumericValues: removeFiltro,
    });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleSearch }
        name="column"
        id="population"
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            { option }
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleSearch }
        name="comparison"
        id="comparison"

      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        onChange={ handleSearch }
        data-testid="value-filter"
        type="Number"
        name="value"
      />

      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setNameColumn(target.value) }
      >
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
      </select>

      <label htmlFor="ASC">
        ascendente
        <input
          type="radio"
          value="ASC"
          id="ASC"
          name="radio-btn"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => setOrdem(target.value) }
        />
      </label>
      <label htmlFor="DESC">
        descendente
        <input
          type="radio"
          value="DESC"
          name="radio-btn"
          id="DESC"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setOrdem(target.value) }
        />
      </label>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => sortElement(nameColumn, ordem) }
      >
        Ordenar
      </button>

      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>

      {
        filters.filterByNumericValues.map((elemento) => (
          <div key={ elemento.column } data-testid="filter">
            <p>
              <span>{elemento.column}</span>
              <span>{elemento.comparison}</span>
              <span>{elemento.value}</span>
            </p>
            <button
              type="button"
              onClick={ () => (handleRemove(elemento.column)) }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default ColumnFilter;

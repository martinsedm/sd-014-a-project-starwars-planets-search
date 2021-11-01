import React, { useState, useContext } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import FilterMessage from './FilterMessage';

const WORD_SLICE = 3;

export default function FiltersBar() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'menor que',
    value: '',
  });

  const [orderFilter, setOrderFilter] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const [showOptions, setShowOptions] = useState({
    pop: true,
    orb: true,
    dia: true,
    rot: true,
    sur: true,
  });

  const { setFilter, filter: { numeric } } = useContext(planetSearchContext);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSort = ({ target: { name, value } }) => {
    setOrderFilter((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickSort = () => {
    setFilter.byOrder(orderFilter);
  };

  const handleClick = () => {
    setShowOptions((prevState) => ({
      ...prevState,
      [numericFilters.column.slice(0, WORD_SLICE)]: false,
    }));
    setFilter.byNumeric(numericFilters);
  };

  const removeFilter = (column) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [column.slice(0, WORD_SLICE)]: true,
    }));
    setFilter.removeNumericFilter(column);
  };

  return (
    <div>
      <div className="filtersBar">
        <select
          name="column"
          className="form-select filter-input"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {showOptions.pop && <option value="population">population</option>}
          {showOptions.orb && <option value="orbital_period">orbital_period</option>}
          {showOptions.dia && <option value="diameter">diameter</option>}
          {showOptions.rot && <option value="rotation_period">rotation_period</option>}
          {showOptions.sur && <option value="surface_water">surface_water</option>}

        </select>
        <select
          name="comparison"
          className="form-select filter-input"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
          <option value="maior que">maior que</option>
        </select>

        <input
          type="text"
          name="value"
          data-testid="value-filter"
          value={ numericFilters.value }
          onChange={ handleChange }
          className="form-control filter-input"
        />

        <button
          data-testid="button-filter"
          type="button"
          className="btn btn-primary"
          onClick={ handleClick }
        >
          Filtrar

        </button>
        <select
          name="column"
          className="form-select filter-input"
          data-testid="column-sort"
          onChange={ handleSort }
        >
          <option value="name">name</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
        </select>

        <label htmlFor="ASC">
          Ascendente
          <input
            type="radio"
            name="sort"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input-asc"
            className="form-check-input ms-1"
            onChange={ handleSort }
          />
        </label>

        <label htmlFor="DESC">
          Descendente
          <input
            type="radio"
            name="sort"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input-desc"
            className="form-check-input ms-1"
            onChange={ handleSort }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          className="btn btn-primary"
          onClick={ handleClickSort }
        >
          Ordenar

        </button>
      </div>
      {numeric.map((filter, index) => (<FilterMessage
        key={ index }
        filter={ filter }
        onClick={ removeFilter }
      />))}

    </div>

  );
}

import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Search = () => {
  const {
    setName,
    name,
    value,
    comparasion,
    column,
    setColumn,
    setComparasion,
    setValue,
    setFilter,
    filter } = useContext(PlanetsContext);

  const handleClick = () => {
    setFilter({
      ...filter,
      filterByNumericValues: [
        { column, value, comparasion },
      ],
    });
  };

  return (
    <div>
      <div>
        <input
          placeholder="Procurar pelo nome"
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </div>
      <select
        data-testid="column-filter"
        name="column"
        id="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        value={ comparasion }
        onChange={ (e) => setComparasion(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        id="value"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Search;

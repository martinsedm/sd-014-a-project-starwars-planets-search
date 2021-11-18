import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Header() {
  const { setFilter } = useContext(StarWarsContext);

  function eventHandler({ target }) {
    const { value } = target;
    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  }

  function searchBar() {
    return (
      <input
        type="text"
        data-testid="name-filter"
        name="name"
        id="name"
        placeholder="digite aqui"
        onChange={ eventHandler }
      />
    );
  }

  function filterByType() {
    return (
      <div>
        <select data-testid="column-filter">
          <option id="population" value="name">population</option>
          <option id="orbital_period" value="name">orbital_period</option>
          <option id="diameter" value="name">diameter</option>
          <option id="rotation_period" value="name">rotation_period</option>
          <option id="surface_water" value="name">surface_water</option>
        </select>
      </div>
    );
  }

  function filterByValue() {
    return (
      <div>
        <input
          type="text"
          data-testid="value-filter"
          name="name"
          id="name"
          placeholder="digite aqui"
          onChange={ eventHandler }
        />
      </div>
    );
  }

  function filterByComparison() {
    return (
      <div>
        <select data-testid="comparison-filter">
          <option id="greater" value="name">maior que</option>
          <option id="less" value="name">menor que</option>
          <option id="equal" value="name">igual a</option>
        </select>
      </div>
    );
  }

  function btnFilter() {
    return (
      <button data-testid="button-filter" type="button">Filtrar</button>
    );
  }

  return (
    <header>
      <h1>Star Wars Planets</h1>
      <p />
      { searchBar() }
      <p />
      { filterByType() }
      { filterByComparison() }
      { filterByValue() }
      { btnFilter() }
    </header>
  );
}

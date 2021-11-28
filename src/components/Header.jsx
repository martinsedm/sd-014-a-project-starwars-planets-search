import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Header() {
  const { filter: { filters: { filterByName, filterByNumericValues },
  }, setFilter, setControl } = useContext(StarWarsContext);

  // funciona e salva corretamente no context
  // falta apenas arrumar o filtro em PlanetsTable
  function eventHandler({ target }) {
    const { id, value } = target;
    setFilter({
      filters: {
        filterByName: {
          name: (id === 'name') ? value : filterByName.name,
        },
        filterByNumericValues: [{
          column: (id === 'column-filter') ? target[target.selectedIndex].id
            : filterByNumericValues[filterByNumericValues.length - 1].column,
          comparison: (id === 'comparison-filter')
            ? target[target.selectedIndex].id
            : filterByNumericValues[filterByNumericValues.length - 1].comparison,
          value: (id === 'value-filter') ? value
            : filterByNumericValues[filterByNumericValues.length - 1].value,
        }],
      },
    });
  }

  function clickHandler() {
    setControl({
      control: 1,
    });
  }

  function searchBar() {
    return (
      <input
        type="text"
        data-testid="name-filter"
        id="name"
        name="name"
        placeholder="digite aqui"
        onChange={ eventHandler }
      />
    );
  }

  function filterByType() {
    return (
      <div>
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ eventHandler }
        >
          <option id="population">population</option>
          <option id="orbital_period">orbital_period</option>
          <option id="diameter">diameter</option>
          <option id="rotation_period">rotation_period</option>
          <option id="surface_water">surface_water</option>
        </select>
      </div>
    );
  }

  function filterByValue() {
    return (
      <div>
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          placeholder="digite aqui"
          onChange={ eventHandler }
        />
      </div>
    );
  }

  function filterByComparison() {
    return (
      <div>
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ eventHandler }
        >
          <option id="greater">maior que</option>
          <option id="less">menor que</option>
          <option id="equal">igual a</option>
        </select>
      </div>
    );
  }

  function btnFilter() {
    return (
      <button
        data-testid="button-filter"
        type="button"
        onClick={ clickHandler }
      >
        Filtrar
      </button>
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

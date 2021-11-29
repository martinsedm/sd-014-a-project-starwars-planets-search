import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Header() {
  const { filter: { filters: { filterByName, filterByNumericValues: values }, filters,
  }, setFilter, options, setOptions, state, setState,
  } = useContext(StarWarsContext);

  function eventHandler({ target }) {
    const { id, value } = target;
    setFilter({
      filters: {
        ...filters,
        filterByName: {
          name: (id === 'name') ? value : filterByName.name,
        },
      },
    });

    // 4
    setState({
      column:
        (id === 'column-filter')
          ? target[target.selectedIndex].id : state.column,
      comparison:
        (id === 'comparison-filter')
          ? target[target.selectedIndex].id : state.comparison,
      value:
        (id === 'value-filter')
          ? value : state.value,
    });
  }

  function clickHandler() {
    setFilter({
      filters: {
        ...filters,
        filterByNumericValues: [
          ...values,
          { ...state }],
      },
    });
    const selectOption = options.filter((option) => option !== state.column);
    setOptions(selectOption);
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
          { options.map((option) => (
            <option
              key={ option }
              id={ option }
            >
              { option }
            </option>))}
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

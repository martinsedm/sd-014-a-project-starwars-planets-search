import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

export default function Filter() {
  const {
    filterByName,
    setFilterByName,
    // filterByNumber,
    setFilterByNumber,
    // filterByComparison,
    setFilterByComparison,
    // filterByOption,
    setFilterByOption,
    // filterByNumeric,
    clickButton,
    setClickButton,
  } = useContext(PlanetsContext);

  const filterOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const fButton = () => {
    if (clickButton === true) {
      return setClickButton(false);
    }
    return setClickButton(true);
  };

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
        placeholder="Pesquisar"
      />
      {/* <button
        type="button"
        onClick={ search }
      >
        Pesquisar
      </button> */}
      <br />
      <select
        data-testid="column-filter"
        onChange={ (e) => setFilterByOption(e.target.value) }
      >
        { filterOptions.map((op, i) => (
          <option
            key={ i }
            value={ op }
          >
            { op }
          </option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setFilterByComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que"> menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        onChange={ (e) => setFilterByNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => fButton() }
      >
        Buscar
      </button>
    </>
  );
}

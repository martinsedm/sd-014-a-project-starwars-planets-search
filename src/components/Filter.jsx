import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

export default function Filter() {
  const {
    filterByName,
    setFilterByName,
    setFilterByNumber,
    setFilterByComparison,
    setFilterByOption,
    filterByNumeric,
    filterOptions,
  } = useContext(PlanetsContext);

  const comparisonOptions = [
    'maior que',
    'igual a',
    'menor que',
  ];

  // const fButton = () => {
  //   if (clickButton === true) {
  //     return setClickButton(false);
  //   }
  //   return setClickButton(true);
  // };

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
        placeholder="Pesquisar"
      />
      <br />
      <select
        data-testid="column-filter"
        onChange={ (e) => setFilterByOption(e.target.value) }
      >
        {/* { filterOptions.map((op, i) => (
          <option
            key={ i }
            value={ op }
          >
            { op }
          </option>
        )) } */}
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
        { comparisonOptions.map((op, i) => (
          <option
            value={ op }
            name={ i }
            key={ i }
          >
            { op }
          </option>
        )) }
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
        onClick={ () => filterByNumeric() }
      >
        Buscar
      </button>
    </>
  );
}

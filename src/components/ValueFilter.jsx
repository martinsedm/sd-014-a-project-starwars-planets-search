import React, { useState, useContext } from 'react';

import planetsContext from '../context/planetsContext';

function ValueFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior');
  const [value, setValue] = useState(0);

  // console.log(column);
  // console.log(comparison);
  // console.log(value);

  const { filters, addNumericFilter } = useContext(planetsContext);

  const renderOption = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const usedOptions = filters.filterByNumericValues.map(({ column: coluna }) => coluna);

    return options.map(
      (option) => {
        if (!usedOptions.includes(option)) {
          return <option key={ option } value={ option }>{option}</option>;
        }
        return null;
      },
    );
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {renderOption()}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addNumericFilter({ column, comparison, value }) }
      >
        Filtrar
      </button>
    </form>
  );
}

export default ValueFilter;

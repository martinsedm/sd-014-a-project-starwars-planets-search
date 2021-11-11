import React, { useContext, useState } from 'react';
import ContextPlanets from './ContextPlanets';

export default function FilterByNumber() {
  const { setNumericFilter } = useContext(ContextPlanets);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValue] = useState(0);

  const attributeFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const lengthFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          { attributeFilter
            .map((event) => (<option key={ event } value={ event }>{ event }</option>)) }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          id="comparison"
          name="comparison"
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          { lengthFilter
            .map((event) => (<option key={ event } value={ event }>{ event }</option>)) }
        </select>
      </label>
      <label htmlFor="value">
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          name="value"
          onChange={ ({ target: { value } }) => setValue(value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setNumericFilter(column, comparison, values) }
      >
        Filtrar
      </button>
    </div>
  );
}

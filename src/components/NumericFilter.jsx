import React, { useContext, useState } from 'react';
import ContextPlanet from '../Context/ContextPlanet';

export default function NumericFilter() {
  const { setInputFilterNumeric } = useContext(ContextPlanet);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const firstFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const secondFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      <label htmlFor="column">
        <select
          name="column"
          id="column"
          onChange={ ({ target }) => setColumn(target.value) }
          data-testid="column-filter"
        >
          { firstFilter.map((e) => (<option key={ e } value={ e }>{ e }</option>)) }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          id="comparison"
          onChange={ ({ target }) => setComparison(target.value) }
          data-testid="comparison-filter"
        >
          { secondFilter.map((e) => (<option key={ e } value={ e }>{ e }</option>)) }
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          id="value"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setInputFilterNumeric(column, comparison, value) }
        >
          Add Filter
        </button>
      </label>
    </div>
  );
}

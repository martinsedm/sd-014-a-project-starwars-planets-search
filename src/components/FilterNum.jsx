import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

export default function FilterNum() {
  const { filterFunc: { changeFiltersNumber } } = useContext(myContext);
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const list = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const comparison = ['maior que', 'menor que', 'igual a'];

  const dropDown = (array) => (
    array.map((compar) => (
      <option key={ compar } name={ compar }>
        {compar}
      </option>
    ))
  );

  const handleChange = ({ target: { name, value } }) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const handleClick = () => {
    changeFiltersNumber('filterByNumericValues', { ...localFilter });
  };

  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ localFilter.column }
          onChange={ handleChange }
        >
          {dropDown(list)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ localFilter.comparison }
          onChange={ handleChange }
        >
          { dropDown(comparison) }
        </select>
        <input
          name="value"
          data-testid="value-filter"
          type="number"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          {' '}
          Filtrar
          {' '}

        </button>
      </form>
    </div>
  );
}

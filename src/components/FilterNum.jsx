import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';

export default function FilterNum() {
  const { filterFunc: { changeFiltersNumber } } = useContext(myContext);
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const { filters: { filterByNumericValues } } = useContext(myContext);

  const [list, setList] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const comparison = ['maior que', 'menor que', 'igual a'];

  const onUpdate = () => {
    const activeFilter = filterByNumericValues.map((filt) => filt.column);
    const newList = list.filter((item) => !activeFilter.includes(item));
    setList(newList);
  };

  useEffect(() => {
    onUpdate();
  }, [filterByNumericValues]);
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

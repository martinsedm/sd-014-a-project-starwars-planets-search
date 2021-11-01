/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';

export default function FilterNum() {
  const { filterFunc: { changeFiltersNumber } } = useContext(myContext);
  const defaultList = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const [list, setList] = useState(defaultList);
  const [localFilter, setLocalFilter] = useState({
    column: list[0],
    comparison: 'maior que',
    value: '',
  });
  const { filters: { filterByNumericValues } } = useContext(myContext);

  const comparison = ['maior que', 'menor que', 'igual a'];

  const onUpdate = () => {
    const activeFilter = filterByNumericValues.map((filt) => filt.column);
    const newList = defaultList.filter((item) => !activeFilter.includes(item));
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
    setLocalFilter({
      ...localFilter,
      column: list[0],
    });
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

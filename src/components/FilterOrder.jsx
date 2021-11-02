import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

export default function FilterOrder() {
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    order: 'ASC',
  });
  const { filterFunc: { changeFilters, setFilterOrder } } = useContext(myContext);
  const defaultList = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const handleChange = ({ target: { name, value } }) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };
  const handleClick = () => {
    setFilterOrder(true);
    changeFilters('order', { ...localFilter });
  };
  return (
    <div>
      <select
        value={ localFilter.column }
        name="column"
        onChange={ handleChange }
        data-testid="column-sort"
      >
        { defaultList.map((option) => (
          <option key={ option } name={ option }>{option}</option>
        ))}
      </select>
      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          name="order"
          data-testid="column-sort-input-asc"
          value="ASC"
          defaultChecked
          onChange={ handleChange }
        />
        Ascendente
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          name="order"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleChange }
        />
        Descendente
      </label>
      <button type="button" onClick={ handleClick } data-testid="column-sort-button">
        Ordenar
      </button>
    </div>
  );
}

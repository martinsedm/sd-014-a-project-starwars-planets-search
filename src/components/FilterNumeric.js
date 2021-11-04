import React, { useContext, useState } from 'react';
import MyContext from '../context/Context';

function FilterNumeric() {
  const { data, setData } = useContext(MyContext);
  const [select, setSelect] = useState({
    array:
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
    column: '',
    comparison: '',
    value: 0,
  });
  const handleChange = (e) => {
    setSelect({
      ...select, [e.target.id]: e.target.value });
  };

  const filterData = () => {
    if (select.comparison === 'maior que') {
      return (data
        .filter((col) => Number(col[select.column]) > Number(select.value)));
    }
    if (select.comparison === 'menor que') {
      return (data
        .filter((col) => Number(col[select.column]) < Number(select.value)));
    }
    return (
      data
        .filter((col) => Number(col[select.column]) === Number(select.value))
    );
  };

  const filterHandle = () => {
    const array2 = select.array.filter((col) => col !== select.column);
    setData(filterData);
    setSelect({
      ...select,
      array: array2,
    });
  };

  return (
    <div>
      <select
        name="column"
        id="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {select.array.map((col, index) => (<option key={ index }>{ col }</option>))}
      </select>
      <select
        name="comparison"
        onChange={ handleChange }
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value"
        onChange={ handleChange }
        name="value"
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ filterHandle }
        data-testid="button-filter"
      >
        Adcionar filtro
      </button>
    </div>
  );
}

export default FilterNumeric;

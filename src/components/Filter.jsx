import React, { useContext, useState } from 'react';
import MainContext from '../context/MainContext';

export default function Filter() {
  const { filters,
    setFilters,
    columnFilters,
    removeColumnFilter } = useContext(MainContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNum, setValueNum] = useState(0);

  const handleChange = ({ target }) => {
    if (target.name === 'column') {
      setColumn(target.value);
    }
    if (target.name === 'comparison') {
      setComparison(target.value);
    }
    if (target.name === 'valueNum') {
      setValueNum(target.value);
    }
  };

  return (
    <div>
      <input
        onChange={ ({ target: { value } }) => {
          setFilters({
            ...filters,
            filterByName: {
              name: value,
            },
          });
        } }
        data-testid="name-filter"
        placeholder="filtrar por nome"
      />
      <br />
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {columnFilters.map((option) => (
          <option value={ option } key={ option }>{ option }</option>
        ))}
        {/* Old version */}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="valueNum"
        data-testid="value-filter"
        placeholder={ Number(0) }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ async () => {
          await setFilters({
            ...filters,
            filterByNumericValues: [
              ...filters.filterByNumericValues,
              {
                column,
                comparison,
                value: valueNum,
              },
            ],
          });
          await removeColumnFilter({ column });
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

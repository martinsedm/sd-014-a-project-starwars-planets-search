import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Filter = () => {
  const {
    data,
    setData,
    filter,
    setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(DataContext);

  const numericalFilter = () => {
    let dataNumericalFilter;
    if (comparison === 'maior que') {
      dataNumericalFilter = data
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparison === 'menor que') {
      dataNumericalFilter = data
        .filter((planet) => Number(planet[column]) < Number((value)));
    } else if (comparison === 'igual a') {
      dataNumericalFilter = data
        .filter((planet) => Number(planet[column]) === Number((value)));
    }
    setData(dataNumericalFilter);
  };

  const handleClick = async () => {
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });
    await numericalFilter();
  };

  return (
    <div>
      <label htmlFor="column-filte">
        <select
          data-testid="column-filter"
          name="column-filter"
          id="column-filte"
          value={ column }
          onChange={ (element) => setColumn(element.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          id="comparison-filter"
          value={ comparison }
          onChange={ (element) => setComparison(element.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          value={ value }
          type="number"
          data-testid="value-filter"
          name="value-filter"
          id="value-filter"
          onChange={ (element) => setValue(element.target.value) }
        />
      </label>
      <button
        id="button-filter"
        type="button"
        data-testid="button-filter"
        name="button-filter"
        onClick={ handleClick }
      >
        acionar o filtro
      </button>
    </div>
  );
};

export default Filter;

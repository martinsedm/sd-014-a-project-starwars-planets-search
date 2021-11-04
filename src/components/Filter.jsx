import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const optionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const optionsComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const { data, filter, setData, setFilter } = useContext(PlanetsContext);
  const { filterByNumericValues } = filter;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          ...filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  };

  const handleClick = async () => {
    const { results } = data;
    const { column, comparison, value } = filterByNumericValues[0];
    const filteredData = results.filter((planet) => {
      const planetValue = planet[column];
      if (comparison === 'maior que') {
        return planetValue > Number(value);
      }
      if (comparison === 'menor que') {
        return planetValue < Number(value);
      }
      return planetValue === value;
    });
    setData({
      ...data,
      results: filteredData,
    });
  };

  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {optionsColumn.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        {optionsComparison.map((opt) => (
          <option key={ opt } value={ opt }>
            {opt}
          </option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
        type="number"
      />
      <button data-testid="button-filter" onClick={ handleClick } type="button">
        Filter
      </button>
    </div>
  );
}

export default Filter;

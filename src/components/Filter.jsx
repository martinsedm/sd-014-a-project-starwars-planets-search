import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const optionsComparison = ['maior que', 'menor que', 'igual a'];

  const {
    data,
    filter,
    changeFilter,
    columnOptions,
    setData,
    setFilter,
    setChangeFilter,
    setColumnOptions,
  } = useContext(PlanetsContext);

  const { filterByNumericValues } = filter;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChangeFilter({ ...changeFilter, [name]: value });
  };

  const handleClick = async () => {
    const { results } = data;
    const { column, comparison, value } = changeFilter;
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

    const optionsColumn = columnOptions.filter(
      (option) => option !== changeFilter.column,
    );
    setColumnOptions(optionsColumn);

    setFilter({
      ...filter,
      filterByNumericValues: [...filterByNumericValues, changeFilter],
    });

    setChangeFilter({
      column: optionsColumn[0],
      comparison: optionsComparison[0],
      value: '',
    });
  };

  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {columnOptions.map((option) => (
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
        {optionsComparison.map((op) => (
          <option key={ op } value={ op }>
            {op}
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

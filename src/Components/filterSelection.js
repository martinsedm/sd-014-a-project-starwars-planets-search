import React, { useState, useContext, useEffect } from 'react';

import PlanetsContext from '../Context/PlanetsContext';

function FilterSelection() {
  const { filters: { filterByNumericValues },
    setFilterNumber, planetsData, setFiltered, filtered } = useContext(PlanetsContext);
  const [columns, setColumns] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [column, setColumn] = useState('population');
  const [delColumns, setDelColumns] = useState([]);
  const [buttonArray, setButtonArray] = useState([]);
  const [comparison, setComparison] = useState('igual a');
  const [numberValue, setNumberValue] = useState('');

  const setFilter = () => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((obj) => {
        switch (obj.comparison) {
        case 'igual a':
          setFiltered(filtered.filter((param) => +param[column] === +numberValue));
          break;
        case 'menor que':
          setFiltered(filtered.filter((param) => +param[column] < +numberValue));
          break;
        case 'maior que':
          setFiltered(filtered.filter((param) => +param[column] > +numberValue));
          break;
        default:
          break;
        }
      });
    } else {
      setFiltered(planetsData);
    }
  };

  const addFilter = () => {
    setFilterNumber(
      [...filterByNumericValues, { column, comparison, value: numberValue }],
    );

    setDelColumns([...delColumns, ...columns.splice(columns.indexOf(column), 1)]);
    setColumns(columns);
    setButtonArray([...buttonArray, filterByNumericValues.length]);
  };

  useEffect(setFilter, [filterByNumericValues]);

  const delFilter = ({ target: { value } }) => {
    filterByNumericValues.splice(0, 1);
    buttonArray.splice(0, 1);
    setFilterNumber(filterByNumericValues);
    setButtonArray(buttonArray);
    setColumns([...columns, delColumns[value]]);
    delColumns.splice(value, 1);
    setFilter();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'column':
      setColumn(value);
      break;
    case 'comparison':
      setComparison(value);
      break;
    case 'value':
      setNumberValue(value);
      break;
    default:
    }
  };

  return (
    <>
      <br />
      <label htmlFor="column">
        <select
          onChange={ (event) => { handleChange(event); } }
          name="column"
          id="column"
          data-testid="column-filter"
        >
          {columns.map((coluna, index) => (
            <option key={ index } value={ coluna }>
              {coluna}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label htmlFor="comparison">
        <select
          name="comparison"
          id="comparison"
          onChange={ (event) => { handleChange(event); } }
          data-testid="comparison-filter"
        >
          <option value="igual a">
            igual a
          </option>
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
        </select>
      </label>
      <br />
      <label htmlFor="value">
        Valor
        <input
          onChange={ (event) => { handleChange(event); } }
          name="value"
          data-testid="value-filter"
          type="text"
          id="value"
        />
      </label>
      <button onClick={ addFilter } type="button" data-testid="button-filter">
        Filtrar

      </button>
      {buttonArray.map((value) => (
        <p data-testid="filter" key={ value }>

          <button
            onClick={ (event) => { delFilter(event); } }
            value={ value }
            type="button"
          >
            x
          </button>
        </p>
      ))}

    </>
  );
}

export default FilterSelection;

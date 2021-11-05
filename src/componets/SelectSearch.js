import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';

import StarWarsContext from '../context/StarWarsContext';

const INIT_COLUMN_STATE = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SelectSearch() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { setFilters, filters } = useContext(StarWarsContext);
  const [columnState, setColumnState] = useState(INIT_COLUMN_STATE);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    });
    const filteredColumn = columnState.filter((state) => state !== column);
    setColumnState(filteredColumn);
    setValue('');
  };

  return (
    <form action="SelectSearch">
      <Form.Select
        data-testid="column-filter"
        onChange={ (event) => (setColumn(event.target.value)) }
      >
        {columnState.map((col, index) => (
          <option key={ index } value={ col }>{col}</option>
        ))}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="mangarotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </Form.Select>
      {/* <select
        data-testid="column-filter"
        onChange={ (event) => (setColumn(event.target.value)) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option selected value="diameter">diameter</option>
        <option value="mangarotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select> */}
      <Form.Select
        data-testid="comparison-filter"
        onChange={ (event) => (setComparison(event.target.value)) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </Form.Select>
      {/* <select
        data-testid="comparison-filter"
        onChange={ (event) => (setcomparison(event.target.value)) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select> */}
      <label htmlFor="numberImput">
        <Form.Control
          type="number"
          name="numberImput"
          id="numberImput"
          data-testid="value-filter"
          value={ value }
          onChange={ (event) => (setValue(event.target.value)) }
        />
        {/* <input
          type="number"
          name="numberImput"
          id="numberImput"
          data-testid="value-filter"
          onChange={ (event) => (setValue(event.target.value)) }
        /> */}
      </label>
      <Button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </Button>
    </form>
  );
}

export default SelectSearch;

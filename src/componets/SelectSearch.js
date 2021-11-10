import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';

import StarWarsContext from '../context/StarWarsContext';

function SelectSearch() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const {
    setFilters,
    filters,
    columnStateGlobal,
    setColumnStateGlobal } = useContext(StarWarsContext);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    });
    const filteredColumn = columnStateGlobal.filter((state) => state !== column);
    setColumnStateGlobal(filteredColumn);
    setValue('');
  };

  return (
    <form action="SelectSearch">
      <Form.Select
        data-testid="column-filter"
        onChange={ (event) => (setColumn(event.target.value)) }
      >
        {columnStateGlobal.map((col, index) => (
          <option key={ index } value={ col }>{col}</option>
        ))}

      </Form.Select>
      <Form.Select
        data-testid="comparison-filter"
        onChange={ (event) => (setComparison(event.target.value)) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </Form.Select>
      <Form.Control
        type="number"
        name="numberImput"
        id="numberImput"
        data-testid="value-filter"
        value={ value }
        onChange={ (event) => (setValue(event.target.value)) }
      />
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

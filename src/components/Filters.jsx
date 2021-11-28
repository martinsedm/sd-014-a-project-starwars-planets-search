/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarContext from '../context/StarContext';
import SelectFilter from './SelectFilter';

function Filters() {
  const {
    filters, columnFilters, handleChange, setFilters, columnFilter, handleFilters,
  } = useContext(StarContext);
  const { filterByName: { name } } = filters;
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const [newState, setNewState] = useState({
    column: '',
    comparison: '',
    value: 0,
  });
  const { column, comparison, value } = newState;

  const handleSelect = ({ target }) => {
    setNewState({ ...newState, [target.name]: target.value });
  };

  const handleClick = () => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, newState] });
  };

  useEffect(() => {
    columnFilter();
  }, [filters]);

  return (
    <form>
      <section>
        <Form.Control
          type="text"
          name="name"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ (e) => handleChange(e, 'filterByName') }
          value={ name }
        />
      </section>
      <section>
        <SelectFilter
          setup={ [columnFilters, 'column-filter', 'column', column, handleSelect] }
        />
        <SelectFilter
          setup={
            [comparisons, 'comparison-filter', 'comparison', comparison, handleSelect]
          }
        />
        <Form.Control
          type="number"
          data-testid="value-filter"
          name="value"
          value={ value }
          onChange={ handleSelect }
        />
        <Button
          variant="light"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </Button>
      </section>
      {filters.filterByNumericValues.length > 0 ? filters.filterByNumericValues
        .map((filter, index) => (
          <div key={ index } data-testid="filter">
            <span>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
            </span>
            <button id={ filter.column } type="button" onClick={ handleFilters }>
              x
            </button>
          </div>
        ))
        : null}
    </form>
  );
}

export default Filters;

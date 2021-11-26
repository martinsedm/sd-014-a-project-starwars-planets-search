import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarContext from '../context/StarContext';
import SelectFilter from './SelectFilter';

function Filters() {
  const { filters, handleChange, setFilters } = useContext(StarContext);
  const { filterByName: { name } } = filters;
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
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
          setup={ [columns, 'column-filter', 'column', column, handleSelect] }
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
    </form>
  );
}

export default Filters;

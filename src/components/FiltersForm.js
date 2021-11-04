import React, { useContext, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarsWarsContext from '../contexts/StarWarsContext';

import { MAIOR, MENOR, IGUAL } from '../hooks/useFilters';
import { ADD_NUM_FILTER, ADD_NAME_FILTER } from '../reducer';

import SelectForm from './SelectForm';
import InputForm from './InputForm';

const COMPARISON = [
  MAIOR,
  MENOR,
  IGUAL,
];

function FiltersForm() {
  const {
    filters,
    planets,
    dispatch } = useContext(StarsWarsContext);
  const [columns, setColumns] = useState([]);
  const [colsUpdated, setColsUptaded] = useState([]);
  const [numFilter, setNumFilter] = useState({
    column: '', comparison: '', value: '' });

  const { filterByNumericValues } = filters;

  useEffect(() => {
    const [planet] = planets;
    const result = Object.keys(planet).reduce((acc, key) => {
      if (!Number.isNaN(Number(planet[key]))) {
        acc.push(key);
      }
      return acc;
    }, []);
    setColumns(result);
    setColsUptaded(result);
  }, [planets]);

  useEffect(() => {
    const columnsUpdated = columns
      .filter((column) => !filterByNumericValues
        .some((filter) => column === filter.column));
    setColsUptaded(columnsUpdated);
  }, [columns, filterByNumericValues]);

  const handleNumChange = ({ target }) => {
    const { name, value } = target;
    setNumFilter({ ...numFilter, [name]: value });
  };

  const handleNameChange = ({ target }) => {
    const { name, value } = target;
    dispatch({ type: ADD_NAME_FILTER, payload: { name, value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_NUM_FILTER, payload: { ...numFilter } });
    setNumFilter({ column: '', comparison: '', value: 0 });
  };

  const { filterByName: { name } } = filters;
  const { column, comparison, value } = numFilter;

  return (
    <section>
      <Form id="filters-form">
        <InputForm
          setup={ ['text', 'Nome', 'name', name, handleNameChange] }
        />
      </Form>
      <Form id="numeric-form" onSubmit={ handleSubmit }>
        <SelectForm
          setup={ [colsUpdated, 'Coluna', 'column', column, handleNumChange] }
        />
        <SelectForm
          setup={ [COMPARISON, 'Comparação', 'comparison', comparison, handleNumChange] }
        />
        <InputForm
          setup={ ['number', 'Valor', 'value', value, handleNumChange] }
        />
        <Button
          type="submit"
          variant="primary"
          data-testid="button-filter"
        >
          Adicionar
        </Button>
      </Form>
    </section>
  );
}

export default FiltersForm;

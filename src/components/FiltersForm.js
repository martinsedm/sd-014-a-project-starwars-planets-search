import React, { useContext, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarsWarsContext from '../contexts/StarWarsContext';

import { MAIOR, MENOR, IGUAL, ASC, DES } from '../hooks/useFilters';
import { ADD_NUM_FILTER, ADD_NAME_FILTER, ORDER } from '../reducer';

import SelectForm from './SelectForm';
import InputForm from './InputForm';
import RadioForm from './RadioForm';

const COMPARISON = [
  MAIOR,
  MENOR,
  IGUAL,
];

const ORDERS = [
  [ASC, DES],
  ['Ascedente', 'Descendente'],
];

function FiltersForm() {
  const {
    filters,
    planets,
    dispatch } = useContext(StarsWarsContext);
  const [columns, setColumns] = useState([]);
  const [colsUpdated, setColsUptaded] = useState([]);
  const [orderColumns, setOrderColumns] = useState([]);
  const [numFilter, setNumFilter] = useState({
    column: '', comparison: '', value: '' });
  const [orderFilter, setOrderFilter] = useState({
    order: ASC, column: 'name',
  });

  const { filterByNumericValues } = filters;

  useEffect(() => {
    const [planet] = planets;
    const keys = Object.keys(planet);
    const result = keys.reduce((acc, key) => {
      if (!Number.isNaN(Number(planet[key]))) {
        acc.push(key);
      }
      return acc;
    }, []);
    setColumns(result);
    setColsUptaded(result);
    setOrderColumns(keys);
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

  const handleOrderChange = ({ target }) => {
    const { name, value } = target;
    setOrderFilter({ ...orderFilter, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_NUM_FILTER, payload: { ...numFilter } });
    setNumFilter({ column: '', comparison: '', value: 0 });
  };

  const submitOrder = (event) => {
    event.preventDefault();
    const { order, column } = orderFilter;
    dispatch({ type: ORDER, payload: { order, column } });
  };

  const { filterByName: { name } } = filters;
  const { column, comparison, value } = numFilter;
  const { colunm: orderColumn } = orderFilter;

  return (
    <section>
      <Form id="filters-form">
        <InputForm
          setup={ [
            'text',
            'Nome',
            'name',
            name,
            handleNameChange] }
        />
      </Form>
      <Form id="numeric-form" onSubmit={ handleSubmit }>
        <SelectForm
          setup={ [
            colsUpdated,
            'Coluna',
            'column-filter',
            'column',
            column,
            handleNumChange] }
        />
        <SelectForm
          setup={ [
            COMPARISON,
            'Comparação',
            'comparison-filter',
            'comparison',
            comparison,
            handleNumChange] }
        />
        <InputForm
          setup={ [
            'number',
            'Valor',
            'value',
            value,
            handleNumChange] }
        />
        <Button
          className="mb-3"
          type="submit"
          variant="primary"
          data-testid="button-filter"
        >
          Adicionar
        </Button>
      </Form>
      <Form id="order-form" onSubmit={ submitOrder }>
        <SelectForm
          setup={ [
            orderColumns,
            'Coluna',
            'column-sort',
            'column',
            orderColumn,
            handleOrderChange] }
        />
        <RadioForm
          setup={ [
            ORDERS,
            'Ordenação',
            'order',
            handleOrderChange] }
        />
        <Button
          className="mb-3"
          type="submit"
          variant="success"
          data-testid="column-sort-button"
        >
          Ordenar
        </Button>

      </Form>
    </section>
  );
}

export default FiltersForm;

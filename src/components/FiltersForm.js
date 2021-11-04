import React, { useContext, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarsWarsContext from '../contexts/StarWarsContext';

import { isEquivalent } from '../services';

import SelectForm from './SelectForm';
import InputForm from './InputForm';

const COMPARISON = [
  'maior que',
  'menor que',
  'igual a',
];

function FiltersForm() {
  const {
    filters,
    planets,
    handleNameChange,
    addNumericFilter } = useContext(StarsWarsContext);
  const [columns, setColumns] = useState([]);
  const [numericFilter, setNumericFilter] = useState({
    column: '', comparison: '', value: '' });

  useEffect(() => {
    const [planet] = planets;
    const result = Object.keys(planet).reduce((acc, key) => {
      if (!Number.isNaN(Number(planet[key]))) {
        acc.push(key);
      }
      return acc;
    }, []);
    setColumns(result);
  }, [planets]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNumericFilter({ ...numericFilter, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { filterByNumericValues } = filters;
    if (!filterByNumericValues.some((object) => isEquivalent(numericFilter, object))) {
      addNumericFilter(numericFilter);
    }
    setNumericFilter({ column: '', comparison: '', value: 0 });
  };

  const { filterByName: { name } } = filters;
  const { column, comparison, value } = numericFilter;

  return (
    <section>
      <Form id="filters-form">
        <InputForm
          setup={ ['text', 'Nome', 'name', name, handleNameChange] }
        />
      </Form>
      <Form id="numeric-form" onSubmit={ handleSubmit }>
        <SelectForm
          setup={ [columns, 'Coluna', 'column', column, handleChange] }
        />
        <SelectForm
          setup={ [COMPARISON, 'Comparação', 'comparison', comparison, handleChange] }
        />
        <InputForm
          setup={ ['number', 'Valor', 'value', value, handleChange] }
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
// onChange={ (e) => handleChange(e, 'filterByName') }
export default FiltersForm;

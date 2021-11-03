import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StarsWarsContext from '../contexts/StarWarsContext';

function FiltersForm() {
  const { filters, handleChange } = useContext(StarsWarsContext);
  const { filterByName: { name } } = filters;
  return (
    <section>
      <Form id="filters-form">
        <FloatingLabel
          label="Nome"
          htmlFor="input-name"
        >
          <Form.Control
            id="input-name"
            data-testid="name-filter"
            type="text"
            name="name"
            value={ name }
            onChange={ (e) => handleChange(e, 'filterByName') }
          />
        </FloatingLabel>
      </Form>
    </section>
  );
}

export default FiltersForm;

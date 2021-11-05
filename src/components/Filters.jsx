import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import StarContext from '../context/StarContext';

function Filters() {
  const { filters, handleChange } = useContext(StarContext);
  const { filterByName: { name } } = filters;
  return (
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
  );
}

export default Filters;

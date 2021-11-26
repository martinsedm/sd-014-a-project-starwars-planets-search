import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function SelectFilter(props) {
  const { setup } = props;
  const [columns, dataTesteId, name, value, handleChange] = setup;
  return (
    <Form.Select
      name={ name }
      value={ value }
      data-testid={ dataTesteId }
      onChange={ handleChange }
    >
      {columns.map((column, index) => (
        <option key={ index }>{column}</option>
      ))}
    </Form.Select>
  );
}

SelectFilter.propTypes = {
  setup: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectFilter;

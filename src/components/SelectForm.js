import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function SelectForm({ setup }) {
  const [array, label, name, value, handleChange, key] = setup;
  return (
    <FloatingLabel
      className="mb-3"
      htmlFor={ `${name}-id` }
      label={ label }
    >
      <Form.Select
        name={ name }
        id={ `${name}-id` }
        data-testid={ `${name}-filter` }
        value={ value }
        onChange={ (e) => handleChange(e, key) }
        required
      >
        {/* <option value="" hidden disabled>Selecione</option> */}
        { array.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        )) }
      </Form.Select>
    </FloatingLabel>
  );
}

SelectForm.propTypes = {
  setup: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectForm;

import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';

function InputForm(props) {
  const { setup } = props;
  const [type, label, name, value, handleChange] = setup;
  return (
    <FloatingLabel
      htmlFor={ `${name}-input` }
      label={ label }
      classname="mb-3"
    >
      <Form.Control
        id={ `${name}-input` }
        data-testid={ `${name}-filter` }
        type={ type }
        name={ name }
        min="0"
        value={ value }
        placeholder={ label }
        required
        onChange={ handleChange }
      />
    </FloatingLabel>
  );
}

InputForm.propTypes = {
  setup: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default InputForm;

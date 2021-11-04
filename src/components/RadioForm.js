import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';

function RadioForm({ setup }) {
  const [arrays, label, name, handleChange] = setup;
  const [radios, labels] = arrays;
  return (
    <Form.Label>
      { label }
      { radios.map((radio, index) => (
        <Form.Check
          key={ index }
          id={ `${radio.toLowerCase()}-order` }
          data-testid={ `column-sort-input-${radio.toLowerCase()}` }
          type="radio"
          name={ name }
          value={ radio }
          onChange={ handleChange }
          label={ labels[index] }
          required
        />
      ))}
    </Form.Label>
  );
}

RadioForm.propTypes = {
  setup: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default RadioForm;

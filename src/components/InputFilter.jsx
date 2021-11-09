import PropTypes from 'prop-types';
import React from 'react';

function InputFilter({ setup }) {
  const [type, label, name, value, handlechange, dataTestid] = setup;
  return (
    <label
      htmlFor={ `${name}-input` }
      label={ label }
    >
      <input
        id={ `${name}-input` }
        type={ type }
        value={ value }
        onChange={ handlechange }
        placeholder={ label }
        data-testid={ dataTestid }
      />
    </label>
  );
}

InputFilter.propTypes = {
  setup: PropTypes.shape({
    dataTestid: PropTypes.string.isRequired,
    handlechange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default InputFilter;

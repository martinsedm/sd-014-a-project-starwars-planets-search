import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { type, placeholder, dataTestId, onChange, value } = props;
  return (
    <input
      type={ type }
      placeholder={ placeholder }
      data-testid={ dataTestId }
      onChange={ ({ target }) => onChange(target.value) }
      value={ value }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  dataTestId: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  dataTestId: '',
  onChange: '',
  value: '',
};

export default Input;

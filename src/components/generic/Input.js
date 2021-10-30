import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { testId, type, setState, name, value, textLabel } = props;
  function handleChange({ target }) {
    // seta o state com o target.value
    // precisara criar condição para utilizar em do tipo checkbox
    setState(target.value);
  }
  return (
    <label htmlFor={ name }>
      {textLabel}
      <input
        type={ type }
        onChange={ handleChange }
        id={ name }
        name={ name }
        value={ value }
        data-testid={ testId }
      />
    </label>
  );
}

Input.defaultProps = {
  testId: '',
  textLabel: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  textLabel: PropTypes.string,
  testId: PropTypes.string,
};

export default Input;

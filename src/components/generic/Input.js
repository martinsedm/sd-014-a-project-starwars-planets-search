import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { testId, type, setState, name, id, value, textLabel } = props;
  function handleChange({ target }) {
    // seta o state com o target.value
    // precisara criar condição para utilizar em do tipo checkbox
    setState(target.value);
  }
  return (
    <label htmlFor={ id === undefined ? name : id }>
      {textLabel}
      <input
        type={ type }
        onChange={ handleChange }
        id={ id === undefined ? name : id }
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
  id: undefined,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  textLabel: PropTypes.string,
  testId: PropTypes.string,
  id: PropTypes.string,
};

export default Input;

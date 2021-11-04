import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { testId, value, name, textLabel, setState, options } = props;
  function handleChange({ target }) {
    // montar logica para mudar o state com função passado por props
    setState(target.value, target.name);
  }
  return (
    <label htmlFor={ name }>
      { textLabel }
      <select
        value={ value }
        name={ name }
        id={ name }
        onChange={ handleChange }
        data-testid={ testId }
      >
        {options.length > 0
        && options.map((option) => <option key={ option }>{option}</option>)}
      </select>
    </label>
  );
}

Select.defaultProps = {
  testId: '',
  textLabel: '',
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  textLabel: PropTypes.string,
  setState: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testId: PropTypes.string,
};

export default Select;

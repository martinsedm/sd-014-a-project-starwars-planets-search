import React from 'react';
import PropTypes from 'prop-types';

function SelectInput({ name, testId, onChange, options }) {
  return (
    <select
      name={ name }
      className="form-select filter-input"
      data-testid={ testId }
      onChange={ onChange }
    >
      {options.map((option) => (
        <option value={ option } key={ option }>{option}</option>
      ))}
    </select>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;

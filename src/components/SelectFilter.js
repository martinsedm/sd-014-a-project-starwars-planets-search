import React from 'react';
import PropTypes from 'prop-types';

function SelectFilter({ dataTestId, onChange, options, value }) {
  return (
    <select data-testid={ dataTestId } onChange={ onChange } value={ value }>
      {options.map((option) => (
        <option key={ option } value={ option }>
          {option}
        </option>
      ))}
    </select>
  );
}

SelectFilter.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectFilter;

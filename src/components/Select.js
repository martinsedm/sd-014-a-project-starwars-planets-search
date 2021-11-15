import React from 'react';
import PropTypes from 'prop-types';

function Select({ options, onChange, testId }) {
  return (
    <select onChange={ (({ target }) => onChange(target.value)) } data-testid={ testId }>
      {options.map((option, index) => (
        <option key={ index } value={ option }>
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testId: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  onChange: '',
  testId: '',
};

export default Select;

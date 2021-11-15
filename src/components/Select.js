import React from 'react';
import PropTypes from 'prop-types';

function Select({ options, onClick, testId }) {
  return (
    <select onChange={ (({ target }) => onClick(target.value)) } data-testid={ testId }>
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
  onClick: PropTypes.func,
};

Select.defaultProps = {
  onClick: '',
  testId: '',
};

export default Select;

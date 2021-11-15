import React from 'react';
import PropTypes from 'prop-types';

function Select({ options, onClick, dataTestId }) {
  return (
    <select onClick={ (({ target }) => onClick(target.value)) } data-testid={ dataTestId }>
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
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
};

Select.defaultProps = {
  onClick: '',
  dataTestId: '',
};

export default Select;

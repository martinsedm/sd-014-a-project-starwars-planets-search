import React from 'react';
import PropTypes from 'prop-types';

function FilterMessage({ filter, onClick }) {
  const { column, comparison, value } = filter;

  return (
    <div data-testid="filter" className="filterMessage">
      <span>{`${column} ${comparison} ${value}`}</span>
      <button
        type="button"
        className="ms-2"
        value={ column }
        onClick={ ({ target }) => onClick(target.value) }
      >
        X

      </button>
    </div>
  );
}

FilterMessage.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterMessage;

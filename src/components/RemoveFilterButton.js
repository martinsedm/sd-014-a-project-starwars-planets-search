import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function RemoveFilterButton({ filter, index }) {
  const { removeNumericFilter } = useContext(PlanetsContext);
  return (
    <label
      data-testid="filter"
      htmlFor={ `remove-filter-btn-${index}` }
    >
      {`${filter.column} ${filter.comparison} ${filter.value} `}
      <button
        type="button"
        id={ `remove-filter-btn-${index}` }
        onClick={ () => removeNumericFilter(filter.column) }
      >
        X
      </button>
    </label>
  );
}

export default RemoveFilterButton;

RemoveFilterButton.propTypes = {
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

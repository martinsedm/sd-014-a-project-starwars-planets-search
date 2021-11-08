import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SelectedFilter() {
  const { addColumn, removeItemFromFilterByNum, filters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  return (
    filterByNumericValues.map(({ column, comparison, value }) => (
      <div data-testid="filter" key={ column }>
        <p>{`${column} ${comparison} ${value}`}</p>
        <button
          type="button"
          onClick={ () => {
            addColumn(column);
            removeItemFromFilterByNum(column);
          } }
        >
          X

        </button>
      </div>
    ))
  );
}

SelectedFilter.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedFilter;

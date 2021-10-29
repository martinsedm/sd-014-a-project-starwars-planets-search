import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../Context/StarWarsContext';

function Filter({ column, comparison, value }) {
  const { addColumn,
    removeFilterByNumericValue,
    resetPlanets } = useContext(StarWarsContext);
  return (
    <div data-testid="filter">
      <p>{`${column} ${comparison} ${value}`}</p>
      <button
        type="button"
        onClick={ () => {
          addColumn(column);
          removeFilterByNumericValue(column);
          resetPlanets();
        } }
      >
        X
      </button>
    </div>
  );
}

Filter.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;

import React, { useContext } from 'react';
import filterContext from '../context/filterContext';

function LineFilter() {
  const {
    filters,
    setFilters,
    handleColumns,
    handleClick } = useContext(filterContext);
  const filtersNumVal = filters.filterByNumericValues;

  const handleClickX = (colu) => {
    const filt = { ...filters };
    filt.filterByNumericValues = filters.filterByNumericValues.filter(
      (item) => item.column !== colu,
    );
    if (filt.filterByNumericValues.length > 0) {
      filt.filterByNumericValues.map(
        (col, comp, value) => handleClick(col, comp, value),
      );
    } else {
      handleClick(false, false, false);
    }
    setFilters(filt);
  };

  return (
    <div data-testid="filter">
      {filtersNumVal && filtersNumVal.map((filt) => (
        <>
          <span key={ filt.column }>
            {filt.column }
            &nbsp;&nbsp;&nbsp;
            {filt.comparison }
            &nbsp;&nbsp;&nbsp;
            {filt.value }
            &nbsp;&nbsp;&nbsp;
          </span>
          <button
            key={ `${filt.column} 1` }
            type="button"
            onClick={ () => {
              handleClickX(filt.column);
              handleColumns(filt.column);
            } }
          >
            X

          </button>
          <br />
        </>
      ))}
    </div>
  );
}

export default LineFilter;

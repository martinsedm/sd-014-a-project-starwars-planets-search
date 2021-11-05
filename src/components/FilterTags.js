import React, { useContext } from 'react';
import starContext from '../context/starContext';

export default function FilterTags() {
  const { filters, setFilters, backup, setData, setOptions } = useContext(starContext);
  const { filterByNumericValues } = filters;

  const handleClick = (column) => {
    let newData = [...backup];
    const filteredFilters = filterByNumericValues.filter((filter) => (
      filter.column !== column
    ));
    filteredFilters.forEach((filter) => {
      newData = newData.filter((el) => {
        switch (el.comparison) {
        case 'maior que':
          return parseInt(el[column], 10) > parseInt(filter.value, 10);
        case 'menor que':
          return parseInt(el[column], 10) < parseInt(filter.value, 10);
        case 'igual a':
          return parseInt(el[column], 10) === parseInt(filter.value, 10);
        default:
          return el;
        }
      });
    });
    setFilters({ ...filters, filterByNumericValues: filteredFilters });
    setData(newData);
    setOptions((prevState) => ([...prevState, column]));
  };

  if (filterByNumericValues.length > 0) {
    return (
      <div>

        {
          filterByNumericValues.map((filter, index) => (
            <div
              key={ index }
              data-testid="filter"
            >
              <span>
                { `${filter.column}` }
                {`${filter.comparison}`}
                { `${filter.value}` }
              </span>

              <button
                type="button"
                onClick={ () => handleClick(filter.column) }
              >
                X
              </button>
            </div>
          ))
        }

      </div>
    );
  }

  return (
    <p>
      {' '}
      loading...
    </p>
  );
}

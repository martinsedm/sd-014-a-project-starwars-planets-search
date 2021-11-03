import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterSave() {
  const { data, setData, save, filter, setFilter, input, setInput } = useContext(Context);
  const { filterByNumericValues: filterNumber } = filter;

  const handleClick = ({ target }) => {
    const { id } = target;
    setData({
      ...data,
      results: data.results.concat(save[id]),
    });

    setInput(input.concat(id));

    const value = filterNumber.filter((filterValue) => filterValue.column !== id);
    setFilter({
      ...filter,
      filterByNumericValues: value,
    });
  };

  return (
    <div>
      {filterNumber.map(({ value, comparison, column }, index) => (
        <div data-testid="filter" key={ index }>
          <p>
            {column}
            {' '}
            {comparison}
            {' '}
            {value}
            {' '}
            <button id={ column } onClick={ handleClick } type="button">
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default FilterSave;
